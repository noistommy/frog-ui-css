# Calendar
날짜 선택 및 스케줄링을 위한 캘린더 UI 컴포넌트.

## Anatomy

```html
<div class="ga-calendar">
  <!-- current date, go to prev/next month button-->
  <div class="calendar-header"></div>
  <!-- display weeks -->
  <div class="week-wrapper"></div>
  <!-- date grid, today, selected day-->
  <div class="cell-wrapper"></div>
</div>
```

## new Calendar()

`Calendar`는 실제 date value와 동일하게 표시 하기 위해 `class Calendar`를 이용하여 화면을 구성하도록 합니다.

```js

class Calendar {
    constructor(root, dateString = '') {
        this.root = root
        this.calendar = this.root
        this.wrapper = this.calendar.querySelector('.cell-wrapper')
        this.selectedDate = ''
        this.dateString = dateString
        this.currentYear = null
        this.currentMonth = null
        this.currentDate = 1
        this.selectedYear = null
        this.selectedMonth = null
        this.selectedDay = null
        this.prevButton = this.calendar.querySelector('.prev-month')
        this.nextButton = this.calendar.querySelector('.next-month')
    }

    parseDateString() {
        if (typeof this.dateString !== 'string') return null

        const value = this.dateString.trim()
        let match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)

        if (match) {
            const year = Number(match[1])
            const month = Number(match[2])
            const date = Number(match[3])
            const maxDate = new Date(year, month, 0).getDate()

            if (month < 1 || month > 12) return null
            if (date < 1 || date > maxDate) return null

            return { year, month, date }
        }

        match = value.match(/^(\d{4})-(\d{2})$/)
        if (!match) return null

        const year = Number(match[1])
        const month = Number(match[2])
        if (month < 1 || month > 12) return null

        return { year, month, date: 1 }
    }

    init() {
        const parsedDate = this.parseDateString()
        const { dy, dm, dd } = getDate();

        if (parsedDate) {
            this.currentYear = parsedDate.year
            this.currentMonth = parsedDate.month
            this.currentDate = parsedDate.date
            this.selectedYear = parsedDate.year
            this.selectedMonth = parsedDate.month
            this.selectedDay = parsedDate.date
        } else {
            this.currentYear = dy
            this.currentMonth = dm
            this.currentDate = dd
            this.selectedYear = dy
            this.selectedMonth = dm
            this.selectedDay = dd
        }

        this.selectedDate = `${this.selectedYear}-${String(this.selectedMonth).padStart(2, '0')}-${String(this.selectedDay).padStart(2, '0')}`

        this.render()

        const initialSelectedCell = this.calendar.querySelector('.cell.selected')
        if (initialSelectedCell) {
            this.selectedDay = Number(initialSelectedCell.dataset.name || this.selectedDay)
            this.selectedDate = `${this.selectedYear}-${String(this.selectedMonth).padStart(2, '0')}-${String(this.selectedDay).padStart(2, '0')}`
        }
        this.calendar.addEventListener('click', e => { this.selectDate(e.target) })
        if (this.prevButton) {
            this.prevButton.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.moveMonth(-1)
            })
        }
        if (this.nextButton) {
            this.nextButton.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.moveMonth(1)
            })
        }
    }

    getSelectedDate() {
        return this.selectedDate
    }

    render() {
        const shouldShowSelectedDate = this.selectedYear === this.currentYear && this.selectedMonth === this.currentMonth
        const date = shouldShowSelectedDate ? this.selectedDay : undefined
        this.setCalendar(this.currentYear, this.currentMonth, date)
    }

    moveMonth(step) {
        const nextMonth = this.currentMonth + step

        if (nextMonth < 1) {
            this.currentYear -= 1
            this.currentMonth = 12
        } else if (nextMonth > 12) {
            this.currentYear += 1
            this.currentMonth = 1
        } else {
            this.currentMonth = nextMonth
        }

        this.render()
    }

    selectDate(el) {
        const cell = el.closest('.cell')
        if (!cell || !this.calendar.contains(cell)) return
        if (cell.classList.contains('disabled')) return

        const selectedCells = this.calendar.querySelectorAll('.cell.selected')
        selectedCells.forEach((selectedCell) => selectedCell.classList.remove('selected'))

        cell.classList.add('selected')
        this.selectedYear = this.currentYear
        this.selectedMonth = this.currentMonth
        this.selectedDay = Number(cell.dataset.name || 1)
        this.selectedDate = `${this.selectedYear}-${String(this.selectedMonth).padStart(2, '0')}-${String(this.selectedDay).padStart(2, '0')}`

        this.calendar.dispatchEvent(new CustomEvent('calendar:change', {
            detail: { selectedDate: this.selectedDate },
        }))
    }
    setCalendar (year = dy, month = dm, date = dd) {
        if (!this.wrapper) return;
       this. wrapper.innerHTML = '';
        // if (month != dm) date = 1;
        let startDay = getStartDay(year, month);
    
        let dayList = [];
    
        let currLast = lastDayList[month-1];
        let prevLast = (month === 1) ? 31 : lastDayList[month - 2];
    
        let currDay = 1;
        let nextDay = 1;
    
        for(let i=0;i<6; i++) {
            for(let j=0; j<7; j++) {
                const cell = document.createElement('span')
                cell.style['--x'] = j;
                cell.style['--y'] = i;
                cell.setAttribute('style', `--x:${j};--y: ${i}` )
                cell.classList.add('cell')
                if(i===0 && j < startDay) {
                    cell.classList.add('disabled')
                    cell.dataset.name = prevLast + (j - startDay) + 1
                    dayList.push(prevLast + (j - startDay) + 1)
                } else if(currDay <= currLast) {
                    if( j === 0) {
                        cell.classList.add('sun')
                    }
                    if( j === 6) {
                        cell.classList.add('sat')
                    }
                    if( currDay === date) {
                        cell.classList.add('today')
                        cell.classList.add('selected')
                    }
                    cell.dataset.name = currDay;
                    dayList.push(currDay)
                    currDay++
                } else {
                    cell.classList.add('disabled')
                    cell.dataset.name = nextDay
                    dayList.push(nextDay)
                    nextDay++
                }
                // dayList.push(currDay)
                this.wrapper.append(cell)
            }
        }
        if(nextDay > 7) {
            dayList = dayList.slice(0,-7)
        }
    
        this.calendar.querySelector('span.year').innerHTML = year+'년';
        this.calendar.querySelector('span.month').innerHTML = month+'월';
    
        return dayList;
    }
}
```

## Usage

#### Base

```html
<div class="ga-calendar">
  <div class="calendar-header">   ...   </div>
  <div class="week-wrapper">   ...   </div>
  <div class="cell-wrapper">   ...    </div>
</div>
```

#### Symmetry header

prev/next month 버튼이 좌우 대칭으로 위치하여 표시됨

```html
<div class="ga-calendar">
  <div class="calendar-header symmetry">   ...   </div>
  <div class="week-wrapper">   ...   </div>
  <div class="cell-wrapper">   ...    </div>
</div>
```

#### Border

```html
<div class="ga-calendar border">
  <div class="calendar-header">   ...   </div>
  <div class="week-wrapper">   ...   </div>
  <div class="cell-wrapper">   ...    </div>
</div>
```

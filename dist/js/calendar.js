const lastDayList = [31,28,31,30,31,30,31,31,30,31,30,31];
const days = ['일', '월', '화', '수', '목', '금', '토']
const calendar = document.querySelector('.ga-calendar');
const wrapper = document.querySelector('.cell-wrapper');

const prev = document.querySelector('.prev-month')
const next = document.querySelector('.next-month')

const getDate = () => {
    const y = new Date().getFullYear();
    const m = new Date().getMonth() + 1;
    const d = new Date().getDate();
    return { dy: y, dm: m, dd: d }
}

const {dy, dm, dd} = getDate();
const getStartDay = (year, month) => {
    let startIndex = 0;

    let basicDay = 365 * (year - 1); // 현재 월 기준 전년까지 기본 일 수
    // 윤년 계산
    let leafDay = Math.floor((year-1)/4) -  Math.floor((year-1)/100) +  Math.floor((year-1)/400);
    // 현재 해 오늘까지의 일 수
    let currentYearDay = 1;

    if(month > 1 && year%4 === 0 && (year%100 !== 0 || year%400 === 0)) {
        lastDayList[1] = 29;
    } else {
        lastDayList[1] = 28;
    }

    for(let i=0;i<(month - 1); i++) {
        currentYearDay += lastDayList[i];
    }
    startIndex = (basicDay + leafDay + currentYearDay)%7;
    return startIndex;
};

function setCalendar (year = dy, month = dm, date = dd) {
    if (!wrapper) return;
    wrapper.innerHTML = '';
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
            wrapper.append(cell)
        }
    }
    if(nextDay > 7) {
        dayList = dayList.slice(0,-7)
    }

    calendar.querySelector('span.year').innerHTML = year+'년';
    calendar.querySelector('span.month').innerHTML = month+'월';

    return dayList;
}




class Calendar {
    constructor(root, dateString = '') {
        this.root = root
        this.calendar = this.root
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
        setCalendar(this.currentYear, this.currentMonth, date)
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
}

// export default Calendar;

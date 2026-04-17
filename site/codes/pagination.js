const base = `
<div class="ga-pagination">
    <div class="pagination-nav prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-num active">1</div>
        <div class="pagination-num">{n}</div>
        ...
    </div>
    <div class="pagination-nav next"><i class="xi-angle-right"></i></div>
</div>
`

const limit = `
<div class="ga-pagination">
    <div class="pagination-nav prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-num active">1</div>
        <div class="pagination-num block-prev"><i class="xi-ellipsis-h"></i></div>
        <div class="pagination-num">{n}</div>
        ...
        <div class="pagination-num block-next"><i class="xi-ellipsis-h"></i></div>
        <div class="pagination-num">{last}</div>
    </div>
    <div class="pagination-nav next"><i class="xi-angle-right"></i></div>
</div>
`

const round = `
<div class="ga-pagination number round">
    <div class="pagination-nav prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-num active">1</div>
        <div class="pagination-num">{n}</div>
        ...
    </div>
    <div class="pagination-nav next"><i class="xi-angle-right"></i></div>
</div>
`

const custom = `
<div class="ga-pagination number">
    <div class="pagination-nav pagination-item prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-num pagination-item active">1</div>
        <div class="pagination-num pagination-item block-prev"><i class="xi-ellipsis-h"></i></div>
        <div class="pagination-num pagination-item">{n}</div>
        ...
        <div class="pagination-num pagination-item block-next"><i class="xi-ellipsis-h"></i></div>
        <div class="pagination-num pagination-item">{last}</div>
    </div>
    <div class="pagination-nav pagination-item next"><i class="xi-angle-right"></i></div>
</div>
`

const page = `
<div class="ga-pagination page">
    <div class="pagination-nav pagination-item prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-info">
            <div class="pagination-nav">1</div>
            <span>/</span>
            <div class="pagination-nav">10</div>
        </div>
    </div>
    <div class="pagination-nav pagination-item next"><i class="xi-angle-right"></i></div>
</div>
`

const compact = `
<div class="ga-pagination number compact">
    <div class="pagination-nav prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-num active">1</div>
        <div class="pagination-num">{n}</div>
        ...
    </div>
    <div class="pagination-nav next"><i class="xi-angle-right"></i></div>
</div>
`

const align = `
<div class="ga-pagination number align-{left|center|right}">
    <div class="pagination-nav prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-num active">1</div>
        <div class="pagination-num">{n}</div>
        ...
    </div>
    <div class="pagination-nav next"><i class="xi-angle-right"></i></div>
</div>
`

module.exports = {
  base,
  limit,
  round,
  custom,
  page,
  compact,
  align,
}

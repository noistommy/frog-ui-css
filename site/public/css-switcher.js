/**
 * CSS 파일 동적 교체 스크립트
 * frogui.css 대신 선택한 CSS 파일로 동적으로 교체합니다.
 */

(function() {
    'use strict';

    const CSS_LINK_ID = 'frogui-css';
    const STORAGE_KEY = 'selected-css-file';
    const DEFAULT_CSS = '/frogui.css';

    /**
     * CSS 파일을 동적으로 교체하는 함수
     * @param {string} cssPath - 교체할 CSS 파일 경로
     */
    function switchCSS(cssPath) {
        const linkElement = document.getElementById(CSS_LINK_ID);
        
        if (!linkElement) {
            console.warn('CSS link element not found');
            return;
        }

        // 새로운 link 요소 생성
        const newLink = document.createElement('link');
        newLink.id = CSS_LINK_ID;
        newLink.rel = 'stylesheet';
        newLink.href = cssPath;

        // 기존 link 요소를 새 것으로 교체
        linkElement.parentNode.replaceChild(newLink, linkElement);

        // 선택한 CSS 파일을 localStorage에 저장
        try {
            localStorage.setItem(STORAGE_KEY, cssPath);
        } catch (e) {
            console.warn('localStorage is not available:', e);
        }
    }

    /**
     * 저장된 CSS 파일 설정을 불러오는 함수
     */
    function loadSavedCSS() {
        try {
            const savedCSS = localStorage.getItem(STORAGE_KEY) || DEFAULT_CSS;
            switchCSS(savedCSS);
            
            // 드롭다운 선택값도 업데이트
            const selector = document.getElementById('css-selector');
            if (selector) {
                selector.value = savedCSS;
            }
        } catch (e) {
            console.warn('Failed to load saved CSS:', e);
        }
    }

    /**
     * 초기화 함수
     */
    function init() {
        const selector = document.getElementById('css-selector');
        const cssMenu = selector && selector.querySelector('.ga-list.selection');
        
        // 저장된 CSS 파일 불러오기
        loadSavedCSS();

        if (!selector) {
            console.warn('CSS file selector not found');
            return;
        }
        

        // 드롭다운 변경 이벤트 리스너 추가
        cssMenu.addEventListener('click', function(e) {
            const selectedCSS = e.target.dataset.path;
            switchCSS(selectedCSS);
        });
        
    }

    // DOM이 로드된 후 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 전역 함수로 export (필요한 경우 외부에서 호출 가능)
    window.switchFrogUICSS = switchCSS;
    window.loadSavedFrogUICSS = loadSavedCSS;

})();


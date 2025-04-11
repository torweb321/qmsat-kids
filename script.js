// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 导航按钮功能
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            navButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前点击的按钮添加active类
            this.classList.add('active');
            
            // 隐藏所有内容区域
            contentSections.forEach(section => section.classList.remove('active'));
            
            // 显示对应的内容区域
            const targetSection = document.getElementById(this.dataset.section);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
    
    // 打印按钮功能
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    // 模拟图片加载
    // 在实际使用时，您需要替换这些占位符为实际的图片
    const imagePlaceholders = document.querySelectorAll('.img-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        const imageType = placeholder.dataset.img;
        if (imageType) {
            // 这里我们只是添加一些文本来表示图片内容
            // 在实际应用中，您应该替换为实际的图片元素
            let imageDescription = '';
            
            switch(imageType) {
                case 'apple':
                    imageDescription = '🍎';
                    break;
                case 'banana':
                    imageDescription = '🍌';
                    break;
                case 'cat':
                    imageDescription = '🐱';
                    break;
                case 'number1':
                    imageDescription = '1️⃣';
                    break;
                case 'number2':
                    imageDescription = '2️⃣';
                    break;
                case 'number3':
                    imageDescription = '3️⃣';
                    break;
                case 'addition1':
                    imageDescription = '1️⃣+1️⃣=❓';
                    break;
                case 'addition2':
                    imageDescription = '2️⃣+1️⃣=❓';
                    break;
                case 'story1':
                    imageDescription = '🐱😊🥛';
                    break;
                default:
                    imageDescription = '📷';
            }
            
            placeholder.innerHTML = `<span style="font-size: 2rem;">${imageDescription}</span>`;
        }
    });
    
    // 为选项按钮添加点击效果
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除同组中所有按钮的选中状态
            const parentOptions = this.parentElement;
            parentOptions.querySelectorAll('.option-btn').forEach(btn => {
                btn.style.backgroundColor = '';
                btn.style.transform = '';
            });
            
            // 设置当前按钮的选中状态
            if (this.classList.contains('correct')) {
                this.style.backgroundColor = '#a5d6a7';
                this.style.transform = 'scale(1.1)';
            } else {
                this.style.backgroundColor = '#ef9a9a';
            }
        });
    });
    
    // 为卡片添加点击翻转效果（移动设备上的触摸支持）
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
            
            // 如果已经翻转，添加翻转样式
            if (this.classList.contains('flipped')) {
                this.querySelector('.card-front').style.transform = 'rotateY(180deg)';
                this.querySelector('.card-back').style.transform = 'rotateY(0deg)';
            } else {
                // 否则恢复原样
                this.querySelector('.card-front').style.transform = '';
                this.querySelector('.card-back').style.transform = '';
            }
        });
    });
});

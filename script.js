// بيانات تجريبية - يمكن استبدالها بروابط حقيقية للكتب أو الملازم
const materialsData = {
    'الصف الأول متوسط': [
        { title: 'مادة الرياضيات', link: 'https://example.com/math' },
        { title: 'مادة العلوم', link: 'https://example.com/science' },
    ],
    'الصف الثاني متوسط': [
        { title: 'مادة اللغة العربية', link: 'https://example.com/arabic' },
        { title: 'مادة اللغة الإنجليزية', link: 'https://example.com/english' },
    ]
};

function showMaterials(grade) {
    const materialsSection = document.getElementById('materials');
    materialsSection.innerHTML = '';
    const materials = materialsData[grade] || [];
    materials.forEach(material => {
        const materialDiv = document.createElement('div');
        materialDiv.className = 'material';
        materialDiv.innerHTML = `<h3>${material.title}</h3><a href="${material.link}" target="_blank">تحميل</a>`;
        materialsSection.appendChild(materialDiv);
    });
}

// وظيفة البحث
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const materialsSection = document.getElementById('materials');
    materialsSection.innerHTML = '';
    
    for (const grade in materialsData) {
        const filteredMaterials = materialsData[grade].filter(material => 
            material.title.toLowerCase().includes(query)
        );
        filteredMaterials.forEach(material => {
            const materialDiv = document.createElement('div');
            materialDiv.className = 'material';
            materialDiv.innerHTML = `<h3>${material.title} (${grade})</h3><a href="${material.link}" target="_blank">تحميل</a>`;
            materialsSection.appendChild(materialDiv);
        });
    }
});

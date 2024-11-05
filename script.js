const materials = []; // مصفوفة لتخزين الملازم

function showSection(sectionId) {
    const sections = document.querySelectorAll('.main-content section');
    sections.forEach(section => {
        section.style.display = 'none'; // إخفاء جميع الأقسام
    });
    document.getElementById(sectionId).style.display = 'block'; // إظهار القسم المحدد
}

function addMaterial() {
    const title = document.getElementById('material-title').value;
    const link = document.getElementById('material-link').value;

    if (title && link) {
        materials.push({ title, link });
        alert('تم إضافة المادة بنجاح!');
        document.getElementById('material-title').value = ''; // مسح الحقول بعد الإضافة
        document.getElementById('material-link').value = '';
        showMaterials();
    } else {
        alert('يرجى ملء جميع الحقول!');
    }
}

function showMaterials() {
    const materialsList = document.getElementById('materials-list');
    materialsList.innerHTML = ''; // مسح القائمة الحالية
    materials.forEach((material, index) => {
        const materialDiv = document.createElement('div');
        materialDiv.innerHTML = `<p>${material.title} <a href="${material.link}" target="_blank">تحميل</a> <button onclick="deleteMaterial(${index})">حذف</button></p>`;
        materialsList.appendChild(materialDiv);
    });
}

function deleteMaterial(index) {
    materials.splice(index, 1); // حذف المادة من المصفوفة
    showMaterials(); // تحديث قائمة الملازم
}

function logout() {
    alert('تم تسجيل الخروج!');
    // يمكنك إضافة منطق تسجيل الخروج هنا
}

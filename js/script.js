function calculateBMI() {
    // Mendapatkan nilai input
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Mengubah tinggi dari cm ke meter

    // Menghitung BMI
    const bmi = weight / (height * height);

    // Menampilkan hasil
    const result = document.getElementById('result');
    const bmiResult = document.getElementById('bmiResult');
    result.style.display = 'block';

    // Menginterpretasikan hasil BMI
    let status = '';
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Kegemukan (Obesitas)';
    }

    // Memperbarui teks hasil
    bmiResult.innerHTML = `Jenis Kelamin: ${gender}<br>BMI: ${bmi.toFixed(1)}<br>Status: ${status}`;
}

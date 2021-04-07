let a=prompt("Số cân nặng (kg)")
let b=prompt("Chiều cao(m)")
BMI=a/(b*b);
if (BMI<18.5) {
    alert("Gầy");
}
else {
    if (18.5 <= BMI&&BMI<= 24.9)
        alert("Bình thường");
    else {
        if (25 <= BMI&&BMT <= 29.9)
            alert("Mập");
        else {
            if (30 <= BMI&&BMI <= 34.9)
                alert("Béo c1");
            else {
                if (35 <= BMI&&BMI <= 39.9)
                    alert("Béo c2");
                else {
                    alert("Nguy hiểm");
                }
            }
        }
    }
}

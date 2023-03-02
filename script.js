function countAge() {
    const birthDate = document.getElementById("birthDate").value;
    const mtqDate = document.getElementById("mtqDate").value;
    const btn = document.getElementById("count");
    const msDay = 1000 * 60 * 60 * 24; // milidetik per hari
    const msMonth = msDay * 30.44; // rata-rata milidetik per bulan
    const msYear = msMonth * 12; // rata-rata milidetik per tahun
    const birthDateMs = new Date(birthDate).getTime();
    const nowMs = Date.now();
    const ageMs = new Date(mtqDate) - birthDateMs;
    const ageYear = Math.floor(ageMs / msYear);
    const ageMonth = Math.floor((ageMs % msYear) / msMonth);
    const ageDay = Math.floor(((ageMs % msYear) % msMonth) / msDay);

    const cabang = document.getElementById("cabang");
    const cabangValue = cabang.value;
    const cabangName = cabang.options[cabang.selectedIndex].text;

    const batasUmur = {
        satu: {//tilawah anak anak
            msYear: 14,
            msMonth: 11,
            msDay: 29
        },
        dua: {// tilawah remaja
            msYear: 24,
            msMonth: 11,
            msDay: 29
        },
        tiga: {//tilawah dewasa
            msYear: 40,
            msMonth: 11,
            msDay: 29
        },
        empat: {//tilawah cacat netra
            msYear: 49,
            msMonth: 11,
            msDay: 29
        },
        lima: {//murattal remaja
            msYear: 24,
            msMonth: 11,
            msDay: 29
        },
        enam: {//murattal dewasa
            msYear: 40,
            msMonth: 11,
            msDay: 29
        },
        tujuh: {//mujawwad dewasa
            msYear: 40,
            msMonth: 11,
            msDay: 29
        },
        delapan: {//1 juz
            msYear: 15,
            msMonth: 11,
            msDay: 29
        },
        sembilan: {//5 juz
            msYear: 20,
            msMonth: 11,
            msDay: 29
        },
        sepuluh: {//10 juz
            msYear: 22,
            msMonth: 11,
            msDay: 29
        },
        sebelas: {//20 juz
            msYear: 22,
            msMonth: 11,
            msDay: 29
        },
        duabelas: {//30 juz
            msYear: 22,
            msMonth: 11,
            msDay: 29
        },
        tigabelas: {//bahasa arab
            msYear: 22,
            msMonth: 11,
            msDay: 29
        },
        empatbelas: {//bahasa indonesia
            msYear: 34,
            msMonth: 11,
            msDay: 29
        },
        limabelas: {//bahasa inggris
            msYear: 34,
            msMonth: 11,
            msDay: 29
        },
        enambelas: {//fahmil
            msYear: 18,
            msMonth: 11,
            msDay: 29
        },
        tujuhbelas: {//syarhil
            msYear: 18,
            msMonth: 11,
            msDay: 29
        },
        delapanbelas: {//naskah
            msYear: 34,
            msMonth: 11,
            msDay: 29
        },
        sembilanbelas: {//mushaf
            msYear: 34,
            msMonth: 11,
            msDay: 29
        },
        duapuluh: {//dekor
            msYear: 34,
            msMonth: 11,
            msDay: 29
        },
        duapuluhsatu: {//kontem
            msYear: 34,
            msMonth: 11,
            msDay: 29
        },
        duapuluhdua: {//m2iq
            msYear: 24,
            msMonth: 11,
            msDay: 29
        },
    }
    let usiaCabangResult;
    if (cabangValue == 1) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.satu.msYear || ageMonth > batasUmur.satu.msMonth || ageDay > batasUmur.satu.msDay) {
                usiaCabangResult = `${batasUmur.satu.msYear} Tahun ${batasUmur.satu.msMonth} Bulan ${batasUmur.satu.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.satu.msYear} Tahun ${batasUmur.satu.msMonth} Bulan ${batasUmur.satu.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 2) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.dua.msYear || ageMonth > batasUmur.dua.msMonth || ageDay > batasUmur.dua.msDay) {
                usiaCabangResult = `${batasUmur.dua.msYear} Tahun ${batasUmur.dua.msMonth} Bulan ${batasUmur.dua.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.dua.msYear} Tahun ${batasUmur.dua.msMonth} Bulan ${batasUmur.dua.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 3) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.tiga.msYear || ageMonth > batasUmur.tiga.msMonth || ageDay > batasUmur.tiga.msDay) {
                usiaCabangResult = `${batasUmur.tiga.msYear} Tahun ${batasUmur.tiga.msMonth} Bulan ${batasUmur.tiga.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.tiga.msYear} Tahun ${batasUmur.tiga.msMonth} Bulan ${batasUmur.tiga.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 4) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.empat.msYear || ageMonth > batasUmur.empat.msMonth || ageDay > batasUmur.empat.msDay) {
                usiaCabangResult = `${batasUmur.empat.msYear} Tahun ${batasUmur.empat.msMonth} Bulan ${batasUmur.empat.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.empat.msYear} Tahun ${batasUmur.empat.msMonth} Bulan ${batasUmur.empat.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 5) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.lima.msYear || ageMonth > batasUmur.lima.msMonth || ageDay > batasUmur.lima.msDay) {
                usiaCabangResult = `${batasUmur.lima.msYear} Tahun ${batasUmur.lima.msMonth} Bulan ${batasUmur.lima.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.lima.msYear} Tahun ${batasUmur.lima.msMonth} Bulan ${batasUmur.lima.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 6) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.enam.msYear || ageMonth > batasUmur.enam.msMonth || ageDay > batasUmur.enam.msDay) {
                usiaCabangResult = `${batasUmur.enam.msYear} Tahun ${batasUmur.enam.msMonth} Bulan ${batasUmur.enam.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.enam.msYear} Tahun ${batasUmur.enam.msMonth} Bulan ${batasUmur.enam.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 7) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.tujuh.msYear || ageMonth > batasUmur.tujuh.msMonth || ageDay > batasUmur.tujuh.msDay) {
                usiaCabangResult = `${batasUmur.tujuh.msYear} Tahun ${batasUmur.tujuh.msMonth} Bulan ${batasUmur.tujuh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.tujuh.msYear} Tahun ${batasUmur.tujuh.msMonth} Bulan ${batasUmur.tujuh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 8) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.delapan.msYear || ageMonth > batasUmur.delapan.msMonth || ageDay > batasUmur.delapan.msDay) {
                usiaCabangResult = `${batasUmur.delapan.msYear} Tahun ${batasUmur.delapan.msMonth} Bulan ${batasUmur.delapan.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.delapan.msYear} Tahun ${batasUmur.delapan.msMonth} Bulan ${batasUmur.delapan.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 9) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.sembilan.msYear || ageMonth > batasUmur.sembilan.msMonth || ageDay > batasUmur.sembilan.msDay) {
                usiaCabangResult = `${batasUmur.sembilan.msYear} Tahun ${batasUmur.sembilan.msMonth} Bulan ${batasUmur.sembilan.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.sembilan.msYear} Tahun ${batasUmur.sembilan.msMonth} Bulan ${batasUmur.sembilan.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }
    if (cabangValue == 10) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.sepuluh.msYear || ageMonth > batasUmur.sepuluh.msMonth || ageDay > batasUmur.sepuluh.msDay) {
                usiaCabangResult = `${batasUmur.sepuluh.msYear} Tahun ${batasUmur.sepuluh.msMonth} Bulan ${batasUmur.sepuluh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.sepuluh.msYear} Tahun ${batasUmur.sepuluh.msMonth} Bulan ${batasUmur.sepuluh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 11) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.sebelas.msYear || ageMonth > batasUmur.sebelas.msMonth || ageDay > batasUmur.sebelas.msDay) {
                usiaCabangResult = `${batasUmur.sebelas.msYear} Tahun ${batasUmur.sebelas.msMonth} Bulan ${batasUmur.sebelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.sebelas.msYear} Tahun ${batasUmur.sebelas.msMonth} Bulan ${batasUmur.sebelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 12) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.duabelas.msYear || ageMonth > batasUmur.duabelas.msMonth || ageDay > batasUmur.duabelas.msDay) {
                usiaCabangResult = `${batasUmur.duabelas.msYear} Tahun ${batasUmur.duabelas.msMonth} Bulan ${batasUmur.duabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.duabelas.msYear} Tahun ${batasUmur.duabelas.msMonth} Bulan ${batasUmur.duabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 13) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.tigabelas.msYear || ageMonth > batasUmur.tigabelas.msMonth || ageDay > batasUmur.tigabelas.msDay) {
                usiaCabangResult = `${batasUmur.tigabelas.msYear} Tahun ${batasUmur.tigabelas.msMonth} Bulan ${batasUmur.tigabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.tigabelas.msYear} Tahun ${batasUmur.tigabelas.msMonth} Bulan ${batasUmur.tigabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 14) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.empatbelas.msYear || ageMonth > batasUmur.empatbelas.msMonth || ageDay > batasUmur.empatbelas.msDay) {
                usiaCabangResult = `${batasUmur.empatbelas.msYear} Tahun ${batasUmur.empatbelas.msMonth} Bulan ${batasUmur.empatbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.empatbelas.msYear} Tahun ${batasUmur.empatbelas.msMonth} Bulan ${batasUmur.empatbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 15) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.limabelas.msYear || ageMonth > batasUmur.limabelas.msMonth || ageDay > batasUmur.limabelas.msDay) {
                usiaCabangResult = `${batasUmur.limabelas.msYear} Tahun ${batasUmur.limabelas.msMonth} Bulan ${batasUmur.limabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.limabelas.msYear} Tahun ${batasUmur.limabelas.msMonth} Bulan ${batasUmur.limabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 16) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.enambelas.msYear || ageMonth > batasUmur.enambelas.msMonth || ageDay > batasUmur.enambelas.msDay) {
                usiaCabangResult = `${batasUmur.enambelas.msYear} Tahun ${batasUmur.enambelas.msMonth} Bulan ${batasUmur.enambelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.enambelas.msYear} Tahun ${batasUmur.enambelas.msMonth} Bulan ${batasUmur.enambelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 17) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.tujuhbelas.msYear || ageMonth > batasUmur.tujuhbelas.msMonth || ageDay > batasUmur.tujuhbelas.msDay) {
                usiaCabangResult = `${batasUmur.tujuhbelas.msYear} Tahun ${batasUmur.tujuhbelas.msMonth} Bulan ${batasUmur.tujuhbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.tujuhbelas.msYear} Tahun ${batasUmur.tujuhbelas.msMonth} Bulan ${batasUmur.tujuhbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 18) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.delapanbelas.msYear || ageMonth > batasUmur.delapanbelas.msMonth || ageDay > batasUmur.delapanbelas.msDay) {
                usiaCabangResult = `${batasUmur.delapanbelas.msYear} Tahun ${batasUmur.delapanbelas.msMonth} Bulan ${batasUmur.delapanbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.delapanbelas.msYear} Tahun ${batasUmur.delapanbelas.msMonth} Bulan ${batasUmur.delapanbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 19) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.sembilanbelas.msYear || ageMonth > batasUmur.sembilanbelas.msMonth || ageDay > batasUmur.sembilanbelas.msDay) {
                usiaCabangResult = `${batasUmur.sembilanbelas.msYear} Tahun ${batasUmur.sembilanbelas.msMonth} Bulan ${batasUmur.sembilanbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.sembilanbelas.msYear} Tahun ${batasUmur.sembilanbelas.msMonth} Bulan ${batasUmur.sembilanbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 20) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.duapuluh.msYear || ageMonth > batasUmur.duapuluh.msMonth || ageDay > batasUmur.duapuluh.msDay) {
                usiaCabangResult = `${batasUmur.duapuluh.msYear} Tahun ${batasUmur.duapuluh.msMonth} Bulan ${batasUmur.duapuluh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.duapuluh.msYear} Tahun ${batasUmur.duapuluh.msMonth} Bulan ${batasUmur.duapuluh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 21) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.duapuluhsatu.msYear || ageMonth > batasUmur.duapuluhsatu.msMonth || ageDay > batasUmur.duapuluhsatu.msDay) {
                usiaCabangResult = `${batasUmur.duapuluhsatu.msYear} Tahun ${batasUmur.duapuluhsatu.msMonth} Bulan ${batasUmur.duapuluhsatu.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.duapuluhsatu.msYear} Tahun ${batasUmur.duapuluhsatu.msMonth} Bulan ${batasUmur.duapuluhsatu.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }

    if (cabangValue == 22) {
        if(isNaN(ageYear)){
            alert("Kolom Jadwal MTQ dan Lahir harus terisi");
        }else{
            if (ageYear > batasUmur.duapuluhdua.msYear || ageMonth > batasUmur.duapuluhdua.msMonth || ageDay > batasUmur.duapuluhdua.msDay) {
                usiaCabangResult = `${batasUmur.duapuluhdua.msYear} Tahun ${batasUmur.duapuluhdua.msMonth} Bulan ${batasUmur.duapuluhdua.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            }  else {
                usiaCabangResult = `${batasUmur.duapuluhdua.msYear} Tahun ${batasUmur.duapuluhdua.msMonth} Bulan ${batasUmur.duapuluhdua.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+ageYear+" Tahun "+ageMonth+" Bulan "+ageDay+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
            }
        }
    }
}
document.getElementById("clear").onclick = function () {
    document.getElementById("result-container").innerHTML = "";
};
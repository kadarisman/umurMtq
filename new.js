document.getElementById("count").addEventListener("click", function (e) {
    e.preventDefault();

    const cabang = document.getElementById("cabang");
    const cabangValue = cabang.value;
    const cabangName = cabang.options[cabang.selectedIndex].text;

    const birthDate = new Date(document.getElementById("birthDate").value);
    const mtqDate = new Date(document.getElementById("mtqDate").value);

    const tahunLahir = birthDate.getFullYear();
    const tahunSekarang = mtqDate.getFullYear();

    const bulanLahir = birthDate.getMonth();
    const bulanSekarang = mtqDate.getMonth();

    const tanggalTanggalLahir = birthDate.getDate();
    const tanggalTanggalSekarang = mtqDate.getDate();

    let umurTahun = tahunSekarang - tahunLahir;
    let umurBulan = 0;
    let umurHari = 0;

    // Hitung selisih bulan
    if (bulanSekarang < bulanLahir) {
        umurTahun--;
        umurBulan = 12 - (bulanLahir - bulanSekarang);
    } else {
        umurBulan = bulanSekarang - bulanLahir;
    }

    // Hitung selisih hari
    if (tanggalTanggalSekarang < tanggalTanggalLahir) {
        const daysInLastMonth = new Date(
            mtqDate.getFullYear(),
            mtqDate.getMonth(),
            0
        ).getDate();
        if (bulanSekarang == bulanLahir) {
            umurTahun--;
            umurBulan = 12 - (bulanLahir - bulanSekarang + 1);
            umurHari = daysInLastMonth - (tanggalTanggalLahir - tanggalTanggalSekarang);
        } else {
            umurBulan = 12 - (bulanLahir - bulanSekarang + 1);
            umurHari = daysInLastMonth - (tanggalTanggalLahir - tanggalTanggalSekarang);
        }
    } else {
        umurHari = tanggalTanggalSekarang - tanggalTanggalLahir;
    }

    const batasUmur = {
        nol: {//tartil
            msYear: 12,
            msMonth: 11,
            msDay: 29
        },
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

    if (cabangValue == 0) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.nol.msYear) {
                // alert(umurTahun+' Tahun '+umurBulan+ ' Bulan '+ umurHari+ ' Hari satu')    
                usiaCabangResult = `${batasUmur.nol.msYear} Tahun ${batasUmur.nol.msMonth} Bulan ${batasUmur.nol.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.nol.msYear){
                    if(umurBulan == batasUmur.nol.msMonth){
                        if(umurHari > batasUmur.nol.msDay){
                            // alert(umurTahun+' Tahun '+umurBulan+ ' Bulan '+ umurHari+ ' Hari dua') 
                            usiaCabangResult = `${batasUmur.nol.msYear} Tahun ${batasUmur.nol.msMonth} Bulan ${batasUmur.nol.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            // alert(umurTahun+' Tahun '+umurBulan+ ' Bulan '+ umurHari+ ' Hari dua satu')   
                            usiaCabangResult = `${batasUmur.nol.msYear} Tahun ${batasUmur.nol.msMonth} Bulan ${batasUmur.nol.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        // alert(umurTahun+' Tahun '+umurBulan+ ' Bulan '+ umurHari+ ' Hari tiga') 
                        usiaCabangResult = `${batasUmur.nol.msYear} Tahun ${batasUmur.nol.msMonth} Bulan ${batasUmur.nol.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    // alert(umurTahun+' Tahun '+umurBulan+ ' Bulan '+ umurHari+ ' Hari empat') 
                    usiaCabangResult = `${batasUmur.nol.msYear} Tahun ${batasUmur.nol.msMonth} Bulan ${batasUmur.nol.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 1) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.satu.msYear) { 
                usiaCabangResult = `${batasUmur.satu.msYear} Tahun ${batasUmur.satu.msMonth} Bulan ${batasUmur.satu.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.satu.msYear){
                    if(umurBulan == batasUmur.satu.msMonth){
                        if(umurHari > batasUmur.satu.msDay){
                            usiaCabangResult = `${batasUmur.satu.msYear} Tahun ${batasUmur.satu.msMonth} Bulan ${batasUmur.satu.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.satu.msYear} Tahun ${batasUmur.satu.msMonth} Bulan ${batasUmur.satu.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.satu.msYear} Tahun ${batasUmur.satu.msMonth} Bulan ${batasUmur.satu.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.satu.msYear} Tahun ${batasUmur.satu.msMonth} Bulan ${batasUmur.satu.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 2) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.dua.msYear) { 
                usiaCabangResult = `${batasUmur.dua.msYear} Tahun ${batasUmur.dua.msMonth} Bulan ${batasUmur.dua.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.dua.msYear){
                    if(umurBulan == batasUmur.dua.msMonth){
                        if(umurHari > batasUmur.dua.msDay){
                            usiaCabangResult = `${batasUmur.dua.msYear} Tahun ${batasUmur.dua.msMonth} Bulan ${batasUmur.dua.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.dua.msYear} Tahun ${batasUmur.dua.msMonth} Bulan ${batasUmur.dua.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.dua.msYear} Tahun ${batasUmur.dua.msMonth} Bulan ${batasUmur.dua.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.dua.msYear} Tahun ${batasUmur.dua.msMonth} Bulan ${batasUmur.dua.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 3) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.tiga.msYear) { 
                usiaCabangResult = `${batasUmur.tiga.msYear} Tahun ${batasUmur.tiga.msMonth} Bulan ${batasUmur.tiga.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.tiga.msYear){
                    if(umurBulan == batasUmur.tiga.msMonth){
                        if(umurHari > batasUmur.tiga.msDay){
                            usiaCabangResult = `${batasUmur.tiga.msYear} Tahun ${batasUmur.tiga.msMonth} Bulan ${batasUmur.tiga.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.tiga.msYear} Tahun ${batasUmur.tiga.msMonth} Bulan ${batasUmur.tiga.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.tiga.msYear} Tahun ${batasUmur.tiga.msMonth} Bulan ${batasUmur.tiga.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.tiga.msYear} Tahun ${batasUmur.tiga.msMonth} Bulan ${batasUmur.tiga.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 4) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.empat.msYear) { 
                usiaCabangResult = `${batasUmur.empat.msYear} Tahun ${batasUmur.empat.msMonth} Bulan ${batasUmur.empat.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.empat.msYear){
                    if(umurBulan == batasUmur.empat.msMonth){
                        if(umurHari > batasUmur.empat.msDay){
                            usiaCabangResult = `${batasUmur.empat.msYear} Tahun ${batasUmur.empat.msMonth} Bulan ${batasUmur.empat.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.empat.msYear} Tahun ${batasUmur.empat.msMonth} Bulan ${batasUmur.empat.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.empat.msYear} Tahun ${batasUmur.empat.msMonth} Bulan ${batasUmur.empat.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.empat.msYear} Tahun ${batasUmur.empat.msMonth} Bulan ${batasUmur.empat.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 5) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.lima.msYear) { 
                usiaCabangResult = `${batasUmur.lima.msYear} Tahun ${batasUmur.lima.msMonth} Bulan ${batasUmur.lima.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.lima.msYear){
                    if(umurBulan == batasUmur.lima.msMonth){
                        if(umurHari > batasUmur.lima.msDay){
                            usiaCabangResult = `${batasUmur.lima.msYear} Tahun ${batasUmur.lima.msMonth} Bulan ${batasUmur.lima.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.lima.msYear} Tahun ${batasUmur.lima.msMonth} Bulan ${batasUmur.lima.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.lima.msYear} Tahun ${batasUmur.lima.msMonth} Bulan ${batasUmur.lima.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.lima.msYear} Tahun ${batasUmur.lima.msMonth} Bulan ${batasUmur.lima.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 6) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.enam.msYear) { 
                usiaCabangResult = `${batasUmur.enam.msYear} Tahun ${batasUmur.enam.msMonth} Bulan ${batasUmur.enam.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.enam.msYear){
                    if(umurBulan == batasUmur.enam.msMonth){
                        if(umurHari > batasUmur.enam.msDay){
                            usiaCabangResult = `${batasUmur.enam.msYear} Tahun ${batasUmur.enam.msMonth} Bulan ${batasUmur.enam.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.enam.msYear} Tahun ${batasUmur.enam.msMonth} Bulan ${batasUmur.enam.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.enam.msYear} Tahun ${batasUmur.enam.msMonth} Bulan ${batasUmur.enam.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.enam.msYear} Tahun ${batasUmur.enam.msMonth} Bulan ${batasUmur.enam.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 7) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.tujuh.msYear) { 
                usiaCabangResult = `${batasUmur.tujuh.msYear} Tahun ${batasUmur.tujuh.msMonth} Bulan ${batasUmur.tujuh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.tujuh.msYear){
                    if(umurBulan == batasUmur.tujuh.msMonth){
                        if(umurHari > batasUmur.tujuh.msDay){
                            usiaCabangResult = `${batasUmur.tujuh.msYear} Tahun ${batasUmur.tujuh.msMonth} Bulan ${batasUmur.tujuh.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.tujuh.msYear} Tahun ${batasUmur.tujuh.msMonth} Bulan ${batasUmur.tujuh.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.tujuh.msYear} Tahun ${batasUmur.tujuh.msMonth} Bulan ${batasUmur.tujuh.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.tujuh.msYear} Tahun ${batasUmur.tujuh.msMonth} Bulan ${batasUmur.tujuh.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 8) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.delapan.msYear) { 
                usiaCabangResult = `${batasUmur.delapan.msYear} Tahun ${batasUmur.delapan.msMonth} Bulan ${batasUmur.delapan.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.delapan.msYear){
                    if(umurBulan == batasUmur.delapan.msMonth){
                        if(umurHari > batasUmur.delapan.msDay){
                            usiaCabangResult = `${batasUmur.delapan.msYear} Tahun ${batasUmur.delapan.msMonth} Bulan ${batasUmur.delapan.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.delapan.msYear} Tahun ${batasUmur.delapan.msMonth} Bulan ${batasUmur.delapan.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.delapan.msYear} Tahun ${batasUmur.delapan.msMonth} Bulan ${batasUmur.delapan.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.delapan.msYear} Tahun ${batasUmur.delapan.msMonth} Bulan ${batasUmur.delapan.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 9) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.sembilan.msYear) { 
                usiaCabangResult = `${batasUmur.sembilan.msYear} Tahun ${batasUmur.sembilan.msMonth} Bulan ${batasUmur.sembilan.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.sembilan.msYear){
                    if(umurBulan == batasUmur.sembilan.msMonth){
                        if(umurHari > batasUmur.sembilan.msDay){
                            usiaCabangResult = `${batasUmur.sembilan.msYear} Tahun ${batasUmur.sembilan.msMonth} Bulan ${batasUmur.sembilan.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.sembilan.msYear} Tahun ${batasUmur.sembilan.msMonth} Bulan ${batasUmur.sembilan.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.sembilan.msYear} Tahun ${batasUmur.sembilan.msMonth} Bulan ${batasUmur.sembilan.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.sembilan.msYear} Tahun ${batasUmur.sembilan.msMonth} Bulan ${batasUmur.sembilan.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 10) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.sepuluh.msYear) { 
                usiaCabangResult = `${batasUmur.sepuluh.msYear} Tahun ${batasUmur.sepuluh.msMonth} Bulan ${batasUmur.sepuluh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.sepuluh.msYear){
                    if(umurBulan == batasUmur.sepuluh.msMonth){
                        if(umurHari > batasUmur.sepuluh.msDay){
                            usiaCabangResult = `${batasUmur.sepuluh.msYear} Tahun ${batasUmur.sepuluh.msMonth} Bulan ${batasUmur.sepuluh.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.sepuluh.msYear} Tahun ${batasUmur.sepuluh.msMonth} Bulan ${batasUmur.sepuluh.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.sepuluh.msYear} Tahun ${batasUmur.sepuluh.msMonth} Bulan ${batasUmur.sepuluh.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.sepuluh.msYear} Tahun ${batasUmur.sepuluh.msMonth} Bulan ${batasUmur.sepuluh.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 11) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.sebelas.msYear) { 
                usiaCabangResult = `${batasUmur.sebelas.msYear} Tahun ${batasUmur.sebelas.msMonth} Bulan ${batasUmur.sebelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.sebelas.msYear){
                    if(umurBulan == batasUmur.sebelas.msMonth){
                        if(umurHari > batasUmur.sebelas.msDay){
                            usiaCabangResult = `${batasUmur.sebelas.msYear} Tahun ${batasUmur.sebelas.msMonth} Bulan ${batasUmur.sebelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.sebelas.msYear} Tahun ${batasUmur.sebelas.msMonth} Bulan ${batasUmur.sebelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.sebelas.msYear} Tahun ${batasUmur.sebelas.msMonth} Bulan ${batasUmur.sebelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.sebelas.msYear} Tahun ${batasUmur.sebelas.msMonth} Bulan ${batasUmur.sebelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 12) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.duabelas.msYear) { 
                usiaCabangResult = `${batasUmur.duabelas.msYear} Tahun ${batasUmur.duabelas.msMonth} Bulan ${batasUmur.duabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.duabelas.msYear){
                    if(umurBulan == batasUmur.duabelas.msMonth){
                        if(umurHari > batasUmur.duabelas.msDay){
                            usiaCabangResult = `${batasUmur.duabelas.msYear} Tahun ${batasUmur.duabelas.msMonth} Bulan ${batasUmur.duabelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.duabelas.msYear} Tahun ${batasUmur.duabelas.msMonth} Bulan ${batasUmur.duabelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.duabelas.msYear} Tahun ${batasUmur.duabelas.msMonth} Bulan ${batasUmur.duabelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.duabelas.msYear} Tahun ${batasUmur.duabelas.msMonth} Bulan ${batasUmur.duabelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 13) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.tigabelas.msYear) { 
                usiaCabangResult = `${batasUmur.tigabelas.msYear} Tahun ${batasUmur.tigabelas.msMonth} Bulan ${batasUmur.tigabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.tigabelas.msYear){
                    if(umurBulan == batasUmur.tigabelas.msMonth){
                        if(umurHari > batasUmur.tigabelas.msDay){
                            usiaCabangResult = `${batasUmur.tigabelas.msYear} Tahun ${batasUmur.tigabelas.msMonth} Bulan ${batasUmur.tigabelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.tigabelas.msYear} Tahun ${batasUmur.tigabelas.msMonth} Bulan ${batasUmur.tigabelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.tigabelas.msYear} Tahun ${batasUmur.tigabelas.msMonth} Bulan ${batasUmur.tigabelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.tigabelas.msYear} Tahun ${batasUmur.tigabelas.msMonth} Bulan ${batasUmur.tigabelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 14) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.empatbelas.msYear) { 
                usiaCabangResult = `${batasUmur.empatbelas.msYear} Tahun ${batasUmur.empatbelas.msMonth} Bulan ${batasUmur.empatbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.empatbelas.msYear){
                    if(umurBulan == batasUmur.empatbelas.msMonth){
                        if(umurHari > batasUmur.empatbelas.msDay){
                            usiaCabangResult = `${batasUmur.empatbelas.msYear} Tahun ${batasUmur.empatbelas.msMonth} Bulan ${batasUmur.empatbelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.empatbelas.msYear} Tahun ${batasUmur.empatbelas.msMonth} Bulan ${batasUmur.empatbelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.empatbelas.msYear} Tahun ${batasUmur.empatbelas.msMonth} Bulan ${batasUmur.empatbelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.empatbelas.msYear} Tahun ${batasUmur.empatbelas.msMonth} Bulan ${batasUmur.empatbelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 15) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.limabelas.msYear) { 
                usiaCabangResult = `${batasUmur.limabelas.msYear} Tahun ${batasUmur.limabelas.msMonth} Bulan ${batasUmur.limabelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.limabelas.msYear){
                    if(umurBulan == batasUmur.limabelas.msMonth){
                        if(umurHari > batasUmur.limabelas.msDay){
                            usiaCabangResult = `${batasUmur.limabelas.msYear} Tahun ${batasUmur.limabelas.msMonth} Bulan ${batasUmur.limabelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.limabelas.msYear} Tahun ${batasUmur.limabelas.msMonth} Bulan ${batasUmur.limabelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.limabelas.msYear} Tahun ${batasUmur.limabelas.msMonth} Bulan ${batasUmur.limabelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.limabelas.msYear} Tahun ${batasUmur.limabelas.msMonth} Bulan ${batasUmur.limabelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 16) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.enambelas.msYear) { 
                usiaCabangResult = `${batasUmur.enambelas.msYear} Tahun ${batasUmur.enambelas.msMonth} Bulan ${batasUmur.enambelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.enambelas.msYear){
                    if(umurBulan == batasUmur.enambelas.msMonth){
                        if(umurHari > batasUmur.enambelas.msDay){
                            usiaCabangResult = `${batasUmur.enambelas.msYear} Tahun ${batasUmur.enambelas.msMonth} Bulan ${batasUmur.enambelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.enambelas.msYear} Tahun ${batasUmur.enambelas.msMonth} Bulan ${batasUmur.enambelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.enambelas.msYear} Tahun ${batasUmur.enambelas.msMonth} Bulan ${batasUmur.enambelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.enambelas.msYear} Tahun ${batasUmur.enambelas.msMonth} Bulan ${batasUmur.enambelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 17) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.tujuhbelas.msYear) { 
                usiaCabangResult = `${batasUmur.tujuhbelas.msYear} Tahun ${batasUmur.tujuhbelas.msMonth} Bulan ${batasUmur.tujuhbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.tujuhbelas.msYear){
                    if(umurBulan == batasUmur.tujuhbelas.msMonth){
                        if(umurHari > batasUmur.tujuhbelas.msDay){
                            usiaCabangResult = `${batasUmur.tujuhbelas.msYear} Tahun ${batasUmur.tujuhbelas.msMonth} Bulan ${batasUmur.tujuhbelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.tujuhbelas.msYear} Tahun ${batasUmur.tujuhbelas.msMonth} Bulan ${batasUmur.tujuhbelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.tujuhbelas.msYear} Tahun ${batasUmur.tujuhbelas.msMonth} Bulan ${batasUmur.tujuhbelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.tujuhbelas.msYear} Tahun ${batasUmur.tujuhbelas.msMonth} Bulan ${batasUmur.tujuhbelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 18) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.delapanbelas.msYear) { 
                usiaCabangResult = `${batasUmur.delapanbelas.msYear} Tahun ${batasUmur.delapanbelas.msMonth} Bulan ${batasUmur.delapanbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.delapanbelas.msYear){
                    if(umurBulan == batasUmur.delapanbelas.msMonth){
                        if(umurHari > batasUmur.delapanbelas.msDay){
                            usiaCabangResult = `${batasUmur.delapanbelas.msYear} Tahun ${batasUmur.delapanbelas.msMonth} Bulan ${batasUmur.delapanbelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.delapanbelas.msYear} Tahun ${batasUmur.delapanbelas.msMonth} Bulan ${batasUmur.delapanbelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.delapanbelas.msYear} Tahun ${batasUmur.delapanbelas.msMonth} Bulan ${batasUmur.delapanbelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.delapanbelas.msYear} Tahun ${batasUmur.delapanbelas.msMonth} Bulan ${batasUmur.delapanbelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 19) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.sembilanbelas.msYear) { 
                usiaCabangResult = `${batasUmur.sembilanbelas.msYear} Tahun ${batasUmur.sembilanbelas.msMonth} Bulan ${batasUmur.sembilanbelas.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.sembilanbelas.msYear){
                    if(umurBulan == batasUmur.sembilanbelas.msMonth){
                        if(umurHari > batasUmur.sembilanbelas.msDay){
                            usiaCabangResult = `${batasUmur.sembilanbelas.msYear} Tahun ${batasUmur.sembilanbelas.msMonth} Bulan ${batasUmur.sembilanbelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.sembilanbelas.msYear} Tahun ${batasUmur.sembilanbelas.msMonth} Bulan ${batasUmur.sembilanbelas.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.sembilanbelas.msYear} Tahun ${batasUmur.sembilanbelas.msMonth} Bulan ${batasUmur.sembilanbelas.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.sembilanbelas.msYear} Tahun ${batasUmur.sembilanbelas.msMonth} Bulan ${batasUmur.sembilanbelas.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 20) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.duapuluh.msYear) { 
                usiaCabangResult = `${batasUmur.duapuluh.msYear} Tahun ${batasUmur.duapuluh.msMonth} Bulan ${batasUmur.duapuluh.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.duapuluh.msYear){
                    if(umurBulan == batasUmur.duapuluh.msMonth){
                        if(umurHari > batasUmur.duapuluh.msDay){
                            usiaCabangResult = `${batasUmur.duapuluh.msYear} Tahun ${batasUmur.duapuluh.msMonth} Bulan ${batasUmur.duapuluh.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.duapuluh.msYear} Tahun ${batasUmur.duapuluh.msMonth} Bulan ${batasUmur.duapuluh.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.duapuluh.msYear} Tahun ${batasUmur.duapuluh.msMonth} Bulan ${batasUmur.duapuluh.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.duapuluh.msYear} Tahun ${batasUmur.duapuluh.msMonth} Bulan ${batasUmur.duapuluh.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 21) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.duapuluhsatu.msYear) { 
                usiaCabangResult = `${batasUmur.duapuluhsatu.msYear} Tahun ${batasUmur.duapuluhsatu.msMonth} Bulan ${batasUmur.duapuluhsatu.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.duapuluhsatu.msYear){
                    if(umurBulan == batasUmur.duapuluhsatu.msMonth){
                        if(umurHari > batasUmur.duapuluhsatu.msDay){
                            usiaCabangResult = `${batasUmur.duapuluhsatu.msYear} Tahun ${batasUmur.duapuluhsatu.msMonth} Bulan ${batasUmur.duapuluhsatu.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.duapuluhsatu.msYear} Tahun ${batasUmur.duapuluhsatu.msMonth} Bulan ${batasUmur.duapuluhsatu.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.duapuluhsatu.msYear} Tahun ${batasUmur.duapuluhsatu.msMonth} Bulan ${batasUmur.duapuluhsatu.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.duapuluhsatu.msYear} Tahun ${batasUmur.duapuluhsatu.msMonth} Bulan ${batasUmur.duapuluhsatu.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

    if (cabangValue == 22) {
        if (isNaN(umurTahun)) {
            alert("inputan kosong atau tanggal salah..!");
        } else {
            if (umurTahun > batasUmur.duapuluhdua.msYear) { 
                usiaCabangResult = `${batasUmur.duapuluhdua.msYear} Tahun ${batasUmur.duapuluhdua.msMonth} Bulan ${batasUmur.duapuluhdua.msDay} Hari`;
                document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
            } else {
                if(umurTahun == batasUmur.duapuluhdua.msYear){
                    if(umurBulan == batasUmur.duapuluhdua.msMonth){
                        if(umurHari > batasUmur.duapuluhdua.msDay){
                            usiaCabangResult = `${batasUmur.duapuluhdua.msYear} Tahun ${batasUmur.duapuluhdua.msMonth} Bulan ${batasUmur.duapuluhdua.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-danger' role='alert'> <b>Lewat Umur</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>"+usiaCabangResult+"</b></div>";
                        }else{
                            usiaCabangResult = `${batasUmur.duapuluhdua.msYear} Tahun ${batasUmur.duapuluhdua.msMonth} Bulan ${batasUmur.duapuluhdua.msDay} Hari`;
                            document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";                     
                        }
                    }else{
                        usiaCabangResult = `${batasUmur.duapuluhdua.msYear} Tahun ${batasUmur.duapuluhdua.msMonth} Bulan ${batasUmur.duapuluhdua.msDay} Hari`;
                        document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                    }
                }else{
                    usiaCabangResult = `${batasUmur.duapuluhdua.msYear} Tahun ${batasUmur.duapuluhdua.msMonth} Bulan ${batasUmur.duapuluhdua.msDay} Hari`;
                    document.getElementById("result-container").innerHTML = " <div class='alert alert-info' role='alert'> <b>Masih Bisa Ikut</b> usia Anda saat MTQ berlangsung <b>"+umurTahun+" Tahun "+umurBulan+" Bulan "+umurHari+" Hari</b> Batas Usia Cabang "+cabangName+" <b>" + usiaCabangResult+"</b></div>";
                }
            }
           
        }
    }

});

document.getElementById("clear").onclick = function () {
    document.getElementById("result-container").innerHTML = "";
};
$ku('.btn-kirim').pas('click', function(btn) {

    const form_saya = $elek('.form-saya input').value;

    btn.preventDefault();
    
    if (form_saya != "") {

        $ku('body').css({
            'display' : 'flex',
            'justify-content' : 'center',
            'align-items' : 'center',
            'box-sizing' : 'border-box',
            'padding' : '3rem'
        });

        $elek('body').innerHTML = `<p>Terima kasih, ${form_saya}.</p>`;

        $ku('body p').css({
            'font-size' : '22px'
        });

        setTimeout(() => {
            location.reload();
        }, 1500);

    } else {

        $ku('.form-saya').tambahElemen("<p class='pesan-error'>Silahkan isi data terlebih dahulu</p>");

        setTimeout(() => { 
            $elek('.pesan-error').remove();           
        }, 1000);

    }
});

$(document).ready(function() {
    // Single line PDF download function
    $('#downloadPDF').click(function() {
        $(this).prop('disabled', true).text('Generating...');
        
        html2pdf()
            .set({
                filename: 'page-' + Date.now() + '.pdf',
                margin: 0.5,
                jsPDF: { format: 'a4' }
            })
            .from($('#pageContent')[0])
            .save()
            .then(() => {
                $(this).prop('disabled', false).text('📄 Download PDF');
            });
    });
});
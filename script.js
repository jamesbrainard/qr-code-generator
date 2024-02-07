function generateQRCode() {
    const urlInput = document.getElementById("urlInput");
    const inputValue = urlInput.value;

    if (inputValue.trim() !== "") {
        const qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";

        try {
            const qr = new QRious({
                value: inputValue,
                size: 200,
            });

            const qrCodeImg = document.createElement("img");

            qrCodeImg.src = qr.toDataURL();

            qrcodeContainer.appendChild(qrCodeImg);
        } catch (error) {
            console.error("Error generating QR code:", error);
            alert("Error generating QR code. Please check the console for details.");
        }
    } else {
        alert("Please enter a valid URL");
    }
}
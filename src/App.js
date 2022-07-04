import PropTypes from "prop-types";
import './App.css';

function App({ headline, showLogos, backgroundImage, qrcode }) {
  return (
    <div class="container-fluid">
        <div class="book">
            <div class="page" style={{ backgroundImage: `url('${backgroundImage}')` }}>
            {
              (headline.length > 52) ?
                <h2>{headline}</h2> :
                <h1>{headline}</h1>
            }
      
            {
              (qrcode == "") ?
                null : <img src={qrcode} width={'120px'} height={'120px'} style={{ position: 'absolute', left: '44px', top: '565px' }} />
            }
      
            </div>
        </div>
    </div>

  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'ABDULLAH ARIEF SYAHPUTRA PRAWIRANEGARA SUBAMBANG HARIS',
  showLogos: true,
  backgroundImage: 'http://ruang-ilmiah.oss-ap-southeast-5.aliyuncs.com/template_cert_kc/2022042910394007.jpg',
  qrcode: ''
}

export default App;

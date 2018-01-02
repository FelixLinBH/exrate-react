import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

        <div className="App" id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <div class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <i class="fa fa-paper-plane"></i> <span class="light">追匯站</span> 
                </a>
            </div>
        </div>
    </div>

    <div id="particles-js" class="particles-header"></div>
    <header class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="select-table">
                            <div class="row-flag">
                                <div class="item select" data-item="usd">
                                    <div class="icon-USD icon-div"></div>
                                    <div class="label">美金</div>
                                </div>
                                
                                <div class="item" data-item="hkd">
                                    <div class="icon-HKD icon-div"></div>
                                    <div class="label">港幣</div>
                                </div>
                                <div class="item" data-item="gbp">
                                    <div class="icon-GBP icon-div"></div>
                                    <div class="label">英鎊</div>
                                </div>
                                <div class="item " data-item="aud">
                                    <div class="icon-AUD icon-div"></div>
                                    <div class="label">澳幣</div>
                                </div>
                                <div class="item " data-item="cad">
                                    <div class="icon-CAD icon-div"></div>
                                    <div class="label">加拿大</div>
                                </div>
                                <div class="item " data-item="sgd">
                                    <div class="icon-SGD icon-div"></div>
                                    <div class="label">新加坡</div>
                                </div>
                                <div class="item " data-item="chf">
                                    <div class="icon-CHF icon-div"></div>
                                    <div class="label">瑞士法郎</div>
                                </div>
                                <div class="item " data-item="jpy">
                                    <div class="icon-JPY icon-div"></div>
                                    <div class="label">日圓</div>
                                </div>
                                 <div class="item " data-item="zar">
                                    <div class="icon-ZAR icon-div"></div>
                                    <div class="label">南非幣</div>
                                </div>
                                <div class="item " data-item="sek">
                                    <div class="icon-SEK icon-div"></div>
                                    <div class="label">瑞典</div>
                                </div>
                                <div class="item " data-item="nzd">
                                    <div class="icon-NZD icon-div"></div>
                                    <div class="label">紐元</div>
                                </div>
                                <div class="item " data-item="thb">
                                    <div class="icon-THB icon-div"></div>
                                    <div class="label">泰幣</div>
                                </div>
                                <div class="item " data-item="php">
                                    <div class="icon-PHP icon-div"></div>
                                    <div class="label">菲國比索</div>
                                </div>
                                <div class="item " data-item="idr">
                                    <div class="icon-IDR icon-div"></div>
                                    <div class="label">印尼幣</div>
                                </div>
                            
                                <div class="item " data-item="eur">
                                    <div class="icon-EUR icon-div"></div>
                                    <div class="label">歐元</div>
                                </div>
                                <div class="item " data-item="krw">
                                    <div class="icon-KRW icon-div"></div>
                                    <div class="label">韓元</div>
                                </div>
                                <div class="item " data-item="vnd">
                                    <div class="icon-VND icon-div"></div>
                                    <div class="label">越南盾</div>
                                </div>
                                <div class="item " data-item="myr">
                                    <div class="icon-MYR icon-div"></div>
                                    <div class="label">馬來幣</div>
                                </div>
                                 <div class="item " data-item="cny">
                                    <div class="icon-CNY icon-div"></div>
                                    <div class="label">人民幣</div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div class="col-md-8 col-md-offset-2">
                       <div class="fresh-table full-color-red">
                            <table id="fresh-table" class="table">
                                <thead>
                                    <th data-field="bankName">銀行</th>
                                    <th data-field="cashbuy" data-sortable="true">現金買入</th>
                                    <th data-field="cashsell" data-sortable="true">現金賣出</th>
                                    <th data-field="bkbuy" data-sortable="true">即期買入</th>
                                    <th data-field="bksell" data-sortable="true">即期賣出</th>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>
                        
                        
                    </div>
                    </div>
                </div>
            </div> 
        </header>
    <section id="about" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>快速追蹤您的匯率動態</h2>
            </div>
        </div>
    </section>

   
    <footer>
        <div class="container text-center">
            <p>Copyright &copy; Exrate.info 2017</p>
        </div>
    </footer>

</div>

    );
  }
}

export default App;

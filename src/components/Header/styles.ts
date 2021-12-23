import styled from 'styled-components';

export const Container = styled.header`   
    width: 100%;
    padding: 0px 80px;
    background: #13BBAF;

    nav{
        overflow: hidden;
        width: 100%;
        height: 85px;
        display: flex;
        justify-content: space-between;
        div.left{
            cursor: pointer;
            display: flex;
            align-items: center;
            img{
                width: 134px;
                height: 109px;
            } 
            h1{
                margin-left: 20px;
                font-family: Oleo Script;
                font-style: normal;
                font-weight: bold;
                font-size: 50px;

                color: #3C4142;
            }
        }
        div.right{
            display: flex;
            align-items: center;
            gap: 30px;
            h2{
                
                font-family: Poppins;
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                text-align: center;

                color: #FFFFFF;
                cursor: pointer;
                padding: 5px 15px;
                border: 1px transparent solid;
                :hover{
                    
                    border: 1px #FFFFFF solid;
                    border-radius: 12px;
                }
            }
        }
    }

    
`;

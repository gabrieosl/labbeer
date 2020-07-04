import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import {
  Container,
  SectionContainer,
  BannerContainer,
  BannerTitle,
  SalesGroup,
  SaleItem,
  SaleDetail,
  PriceContainer,
  BarGroup,
  BarItem,
  BarDetail,
  H1,
  H2,
  P,
} from './styles';

import Header from '../../components/Header';
import Star from '../../assets/star.png';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <BannerContainer>
        <Image
          style={{
            width: '90%',
            height: '100%',
            overflow: 'hidden',
          }}
          source={{
            uri:
              'https://s3-alpha-sig.figma.com/img/d92b/35eb/6de916af563326e95717c7f67ac32efd?Expires=1594598400&Signature=c09I-n~GBN2Qe0-DsUN4X76KoJ6JBet4TI9h3UiyP7K5LzCRX~hhBmfidxiJB~j~Ukr2x3Zfy8wmpcGPpcd6xZhhLw707YUaRhJX8lzhU4cGTsZkYrtAhdm8IVq2OQ3V4kD6yAt9sLzwhQ5i00RfucULFG2UdSFUbNTRBkiSrMgSCsJvWJXNNP3CemKBQqCmbiZKlgvA~eTy0WQX5o2qiAuUzf9vUlM0jN54KPtvrKixyaYuwBLkCk4d3-Sq8KD0hRXfCaDwHcM8Udd3Qa~If7m2-hbmLApVKKPW0wVY2dOtY09I3X4wPjPijuziB93-flqsiNQATBolQUHm4kIzAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          }}
        />
        <BannerTitle>
          VISITE UM BAR AGORA E GANHE
          {'\n'}
          DESCONTOS E RECOMPENSAS
        </BannerTitle>
      </BannerContainer>
      <SectionContainer>
        <H1 style={{ alignSelf: 'baseline' }}>Suas Ofertas</H1>
        <SalesGroup horizontal>
          <SaleItem>
            <Image
              style={{
                width: 60,
                height: 82,
                overflow: 'hidden',
              }}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/d995/d221/0aa235ee2e62449098b9d29e6a48e9fe?Expires=1594598400&Signature=LYH2SIzHwYZo6bo-aNFh~QqAYHy6oli-uTTiJiuUXnRf6qbT4zlvWV9yGDjfHdrpz93CuzIuMZ-lt8-hYvADqfdJxMs6ejs~sIj3aFqfMmTP3X2tR9~4Bw2o3MD7rkcxSYmR5gywLXRVnqQOeDPKtHF4Rpuwmv4TTmMXXCDeLG~TveGytBWoSxkNM~UzMJIaojlpVN~T7hjXUUGqXlIZ5lNe9fX75chj0IQGlH3~djA6c8q4GCCs26VaPctykc7W~XtoAi8RnBW3kzQNsq16y9y2cklLqpkk49eFtFIy5yfWU2eAVb0RdLUo7RVqTrAMP7QUIFCq1Bq4w-NgbZ5AcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <SaleDetail>
              <H2>Budweiser</H2>
              <P>550mL</P>
              <PriceContainer>
                <P>R$ 8,90</P>
                <P inverted>R$ 6,90</P>
              </PriceContainer>
            </SaleDetail>
          </SaleItem>
          <SaleItem>
            <Image
              style={{
                width: 60,
                height: 82,
                overflow: 'hidden',
              }}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/af0e/7e48/79522883087884947d1c865331ef5265?Expires=1594598400&Signature=QWz5yA7LBnM~zLIR9YQC7wi4qotEhdkVxnpMCwmwWuCA1D4U-JanwF6hOjacOIqs32~-~oVl0dIc1Az1-~QPGVGrUeP4ZSWR4iu1TwUnxgLNTJx97~CzXR0xo4jG3oWAHpBtIhcrcgYr0C1P~aJaOOkShykpZHNRHPhqjLEdqU4fQB5YqK93qstWTvCQ~Lsa87hDF09IbbfNjoEM~XTuPQMb9R2LBdl3cX~Gbd8WtSmIhRRTDMN9qJAwj8Kh2NI2VcSENosOd2S04AQ4ztD1Nx4BEG6SXuSAoVpHbBuJ6ruHzSzsPEc2sDXfOam9G82Q8bDBHl2CgOaTswH8oNo0fg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <SaleDetail>
              <H2>Sukita</H2>
              <P>350mL</P>
              <PriceContainer>
                <P>R$ 5,50</P>
                <P inverted>R$ 3,90</P>
              </PriceContainer>
            </SaleDetail>
          </SaleItem>
          <SaleItem>
            <Image
              style={{
                width: 60,
                height: 82,
                overflow: 'hidden',
              }}
              source={{
                uri:
                  'https://cdn.awsli.com.br/600x700/514/514079/produto/19154568/32bd700005.jpg',
              }}
            />
            <SaleDetail>
              <H2>Brahma</H2>
              <P>355mL</P>
              <PriceContainer>
                <P>R$ 6,50</P>
                <P inverted>R$ 4,30</P>
              </PriceContainer>
            </SaleDetail>
          </SaleItem>
        </SalesGroup>
      </SectionContainer>
      <SectionContainer>
        <H1>Bares parceiros</H1>
        <BarGroup horizontal>
          <BarItem>
            <Image
              style={{
                width: 140,
                height: 90,
                overflow: 'hidden',
                borderRadius: 4,
              }}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/82de/dbaa/efbf2939fa271f1051b63dc700bb31bd?Expires=1594598400&Signature=ApKKxQY~w8Q-OdaB4gpv6D9Ct7bfwc8LG2zeun7J14QT3x29pjXHjS6SHhsHKavjl0FmHUKbvLpoKAqnnhBiVZf9WffL6BnpiopTXvs9aw~QC4Fs85Mvr9~17EXhUGiV7EJR9CwQwWiQr3BUvQ-MHXplRX51vRwpuxBK63V9EZ8H-IiVYKLxHhIa5gBTWZDQ-wjEj8aM3B2ohiX7PMxPZS3Ve38bo8gi6xEzhegwhnJqHxDC2IIYcTK-Jv4VdpNdwh2xyUMYKt4c~Yce78~C8vUSFpdYqDdYy17mMmLhRcSb5nZquS5bbsG63XRKB5BLxdqHCvx3il95AK6o1rLb7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <H2>Beco da Lapa</H2>
            <P style={{ padding: 2 }}>Lapa</P>
            <Text style={{ color: '#1A1824' }}>
              {' '}
              <Image source={Star} /> 4.8 (120+)
            </Text>
          </BarItem>
          <BarItem>
            <Image
              style={{
                width: 140,
                height: 90,
                overflow: 'hidden',
                borderRadius: 4,
              }}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/2696/d0fa/641b20eff2dd8d5406343e163f76323b?Expires=1594598400&Signature=TWSu9s0JkXJTVz4mCUhjQPlVbYBNwVRKvDClMBjorcdT4~HdS5jQWqtunN2LBZsIi76~4C5qKI21bMTpwcBgYEo3idyVV2357WPHcDhg-iHvnXtU7ZQs7TJnmQM1jjsvkJfLdtWJusEamcdZtdMfXxFFqewBd3iCcPh-oTERNX6T2MIkWNfKZRIhgNadJOqLRTY3JiUnvUlY6dU8wMB-sOauTBk53yMQMilxjym1O9PX88M6-Vr4Ta6R6FtjO0DWZZDCnFE2U~8~B74QxnhUDP6al6BU7efKpkFOmoz9hBzf0YSCm0lyyqyWMdzHp4ncjpbNOh24AZ~WnTDOC9ABFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <H2>Brewteco Barra</H2>
            <P style={{ padding: 2 }}>Barra da Tijuca</P>
            <Text style={{ color: '#1A1824' }}>
              {' '}
              <Image source={Star} /> 4.9 (60+)
            </Text>
          </BarItem>
          <BarItem>
            <Image
              style={{
                width: 140,
                height: 90,
                overflow: 'hidden',
                borderRadius: 4,
              }}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/a4f7/fcdb/75ccd8b149ab795c581347d476cb6630?Expires=1594598400&Signature=E~6pxwt~seUMVQWEKDklHUKLN9ECsP~ELWU6ZZsNvi7WTi3sF2bg9L4fjDJ-ljC66GPF-OWhJvlIoNLPzOEA9hNnTiQiagfJe4fkzysUB4p~5psvHy5fvIrIfJs4OPxgkzBXUlJnfSqDvSiJp~rB-R4PBs8tbHorSPazRXodUfrfAfJixLzjWCvvxWwBddoLNcPTQahVRwR1ZNudmQQ8iC9nYP55AAKIWO~19rYdzU4NHn24u5HYTSIfBdbRy0NaRZ9hUZhumTLt4IEqpgIL2avDjCWAbmC1hpKwua2RWO5adjbRVCdC3xAsfZxcHJLIEu-7KHqgYStYpz06~o7ZtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <H2>Bar Bracarense</H2>
            <P style={{ padding: 2 }}>Leblon</P>
            <Text style={{ color: '#1A1824' }}>
              {' '}
              <Image source={Star} /> 3.9 (80+)
            </Text>
          </BarItem>
        </BarGroup>
      </SectionContainer>
    </Container>
  );
};

export default Home;

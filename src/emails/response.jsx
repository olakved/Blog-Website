// import {
//   Container,
//   Head,
//   Html,
//   Img,
//   Section,
//   Text,
// } from "react-email-components";

// export function ResponseMail({ email, name, phone, code }) {
//   return (
//     <Html lang="en">
//       <Head>
//         <Font
//           fontFamily="Montserrat"
//           fallbackFontFamily="Verdana"
//           webFont={{
//             url: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
//             format: "woff2",
//           }}
//           fontStyle="normal"
//         />
//       </Head>
//       <Section style={main}>
//         <Container style={container}>
//           <Section style={logoContainer}>
//             <Img
//               src="https://www.datocms-assets.com/80291/1680077601-logolight.png"
//               alt="logImge"
//               style={logoImage}
//             />
//           </Section>

//           <Container style={{ padding: "0px 15px" }}>
//             <Text style={headingA}>
//               We have received an inquiry for our service from
//             </Text>
//             <Container style={{ padding: "0px 15px" }}>
//               <Text style={headingC}>First-Name: {name} </Text>
//               <Text style={headingC}>Email: {email} </Text>
//               <Text style={headingC}>Phone-Number: {phone} </Text>
//               <Text style={headingC}>verification-code: {code} </Text>
//             </Container>
//           </Container>
//         </Container>
//       </Section>
//     </Html>
//   );
// }

// const main = {
//   backgroundColor: "#f6f6f6",
// };

// const container = {
//   margin: "20px auto",
//   width: "580px",
//   backgroundColor: "#ffffff",
// };

// const headingA = {
//   fontSize: "14px",
//   lineHeight: "21px",
//   fontWeight: "500",
//   color: "#484848",
//   fontFamily: "Montserrat",
// };

// const headingC = {
//   marginTop: "20px",
//   fontSize: "14px",
//   lineHeight: "21px",
//   fontWeight: "500",
//   color: "#484848",
//   fontFamily: "Montserrat",
//   listStyle: "disc outside none",
//   display: "list-item",
// };

// const logoContainer = {
//   margin: "15px",
// };

// const logoImage = {
//   width: "30%",
// };

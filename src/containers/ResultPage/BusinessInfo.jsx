import { Flex, Image, Text, Box } from 'pcln-design-system';

const BusinessInfo = (props) => {
  return (
    <Flex bg={`#fff`} width={1} mt={75} py={25}>
      <Box width={1 / 2} pr={50} pl={50} className="businessAbout">
        <h2>What's your Bourbanlity</h2>
        <p>
          A place for anyone who wants to learn more about bourbon. Follow us &
          begin developing your Bourbonality™ today!
        </p>
        <p>Cheers! 🥃🥃🥃</p>
      </Box>
      <Box width={1 / 2} pr={50} className="linksToSocialMedia">
        <h2>Follow us on social media!</h2>
        <p>Links Links Links Links</p>
      </Box>
    </Flex>
  );
};

export default BusinessInfo;

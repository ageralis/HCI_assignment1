import { Box, Flex, Text } from "@chakra-ui/react";

function WeatherApp() {
  return (
    <Box  //Box for iphone screen with cloudy background
      as="div"
      backgroundImage="url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA0L3JtNjE5LTEzLWEtYmFja2dyb3VuZC10ZS0wMDFkLXRfMS5qcGc.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      boxShadow="sm"
      p={4}
      borderRadius="lg"  // rounded corners
      width="300px"
      height="500px"
      mx="auto"  // margin settings 
      mt={20}
      position="relative"
    >
      <Box  //Box for + to customize
        backgroundColor={"white"}
        borderRadius="lg"
        width="20px"
        height="20px"
        position="absolute"
        top={0}
        right={0}
      >
        <Text align="center" >+</Text>
      </Box>
      <Flex align="top" justify="center" height="100%">
        <Flex direction="column" align="center" // set up for current weather and daily temperature graph
        >
          <Text fontSize="30px" color={"white"}>Philadelphia</Text>
          <Flex direction="row" justifyContent="space-between" align="center">
            <Text fontSize="30px" fontWeight="bold" color={"white"}>
              82°F
            </Text>
            <Box  //partly cloudy icon for current weather
              backgroundImage="url('https://cdn-icons-png.freepik.com/512/267/267317.png')"
              backgroundSize="cover"
              p={2}
              position="relative"
              borderRadius="lg"
              width="45px"
              height="45px"
              ml={2}
            />
            <Box //current stats 
            > 
              <Text fontSize="7px" align={"right"} fontWeight="bold" color={"white"} position="absolute" m={1}top={110} >Chance of Rain: 30%  UV: 7 </Text>
            </Box>
          </Flex>
          <Text fontSize="xs" color={"white"} transform="rotate(90deg)" 
            transformOrigin="left top" ml={-12}>_________</Text>
            <Text fontSize="5px" color={"white"} transform="rotate(-90deg)" position="absolute" top={130} ml={-150}>50°  60°  70°  80°  90°</Text>
          <Text color={"white"} position={"absolute"} top={91} left={120} fontSize={"20px"}>↓</Text>
          <Text  // to resemble moving temperature graph
            fontSize="100px" 
            color={"white"} 
            fontWeight="thin" 
            position="absolute" 
            top={45} 
            left={125} 
            zIndex={2}  //to make sure it comes ver top of other content
            transform="rotate(90deg)" 
            transformOrigin="center"
          > 
            ( 
          </Text>
          <Text fontSize="xs" color={"white"}  m={6} ml={-3}>_______________</Text>
          <Text fontSize="6px" color={"white"} position="absolute" top={165} ml={-10}>6am . 9am . 12pm . 3pm . 6pm . 9pm</Text>
        </Flex>
        <Flex direction="column" align="center"></Flex>
        <Box  // box for weekly weather
          as="div"
          backgroundColor={"white"}
          backgroundPosition="center"
          boxShadow="sm"
          p={4}
          borderRadius="lg"
          width="270px"
          height="150px"
          position="absolute"
          top={200}
          left={0}
          right={0}
          mx="auto"
        >
          <Flex direction="column" align="left">
            <Text
              fontSize="xs"
              color="black"
              mt={0.4}
              position="absolute"
              top={0}
              left={2}
              right={0}
              mx="auto"
              zIndex={1}
            >
              This Week: 
            </Text>
            <Flex direction="row" justify="space-between" align="center" mt={2} //make boxes in row 
            >
              <Box // M 
                backgroundColor={"gray.200"} //light gray
                p={2}
                borderRadius="lg"
                width="80px"
                height="100px"
              >
                <Box  
                  backgroundImage="url('https://cdn-icons-png.freepik.com/256/267/267312.png?ga=GA1.1.535850845.1725644461')"
                  backgroundSize="cover"
                  width="20px"
                  height="20px"
                  mb={1}
                />
                <Text fontSize="10px" color="black" textAlign="left">Mon. H: 90 L: 78 UV: 8</Text>
              
              </Box>
              <Box // Tu
                backgroundColor={"gray.200"} 
                p={2}
                borderRadius="lg"
                width="80px"
                height="100px"
              >
                <Box
                  backgroundImage="url('https://cdn-icons-png.freepik.com/256/210/210102.png')"
                  backgroundSize="cover"
                  width="20px"
                  height="20px"
                  mb={1}
                />
                <Text fontSize="10px" color="black" textAlign="left">Tues. H: 70 L: 65 UV: 6</Text>
              </Box>
              <Box // W
                backgroundColor={"gray.200"}
                p={2}
                borderRadius="lg"
                width="80px"
                height="100px"
              >
                <Box
                  backgroundImage="url('https://cdn-icons-png.freepik.com/256/267/267312.png?ga=GA1.1.535850845.1725644461')"
                  backgroundSize="cover"
                  width="20px"
                  height="20px"
                  mb={1}
                />
                <Text fontSize="10px" color="black" textAlign="left">Wed. H: 90 L: 78 UV: 8</Text>
              
              </Box>
              <Box // Th
                backgroundColor={"gray.200"}
                p={2}
                borderRadius="lg"
                width="80px"
                height="100px"
              >
                <Box
                  backgroundImage="url('https://cdn-icons-png.freepik.com/256/210/210102.png')"
                  backgroundSize="cover"
                  width="20px"
                  height="20px"
                  mb={1}
                />
                <Text fontSize="10px" color="black" textAlign="left">Thurs. H: 70 L: 65 UV: 6</Text>
              </Box>
              <Box // F
                backgroundColor={"gray.200"}
                p={2}
                borderRadius="lg"
                width="80px"
                height="100px"
              >
                <Box
                  backgroundImage="url('https://cdn-icons-png.freepik.com/256/312/312247.png?ga=GA1.1.535850845.1725644461')"
                  backgroundSize="cover"
                  width="20px"
                  height="20px"
                  mb={1}
                />
                <Text fontSize="10px" color="black" textAlign="left">Fri . H: 81 L: 77 UV: 5
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box // box for radar at bottom
          as="div"
          backgroundColor={"white"}
          backgroundPosition="center"
          boxShadow="sm"
          p={4}
          borderRadius="lg"
          width="270px"
          height="100px"
          position="absolute"
          bottom={2}
          left={0}
          right={0}
          mx="auto"
        >
          <Flex direction="column" align="center">
            <Text
              fontSize="xs"
              color="black"
              mt={0.4}
              position="absolute"
              top={0}
              left={3}
              right={0}
              mx="auto"
              zIndex={1} // make sure text comes above the radar image
            >
              Radar
            </Text>
            <Box  //radar image box inside white box
              as="div"
              backgroundImage="url('https://assets1.cbsnewsstatic.com/i/cbslocal/wp-content/uploads/sites/15116066/2022/02/Active-Pattern-2.png?w=300')"
              backgroundSize="cover"
              backgroundPosition="center"
              width="250px"
              height="80px"
              position="absolute"
              top={4}
              left={0}
              right={0}
              mx="auto"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default WeatherApp;
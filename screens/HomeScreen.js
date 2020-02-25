import * as WebBrowser from "expo-web-browser";
import React from "react";
import { AppLoading } from "expo";
import { Image } from "react-native";
import {
  Container,
  List,
  Content,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Instruction content. step 1: step 2: step 3: step 4:
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Activities</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                  }}
                />
                <Body>
                  <Text>Activity 1</Text>
                  <Text note>Note 1</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://irishhostfamily.ie/wp-content/uploads/2017/05/group-of-kids-Irish-Host-Family.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                  }}
                />
                <Body>
                  <Text>Activity 2</Text>
                  <Text note>Note 2</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://irishhostfamily.ie/wp-content/uploads/2017/05/group-of-kids-Irish-Host-Family.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                  }}
                />
                <Body>
                  <Text>Activity 3</Text>
                  <Text note>Note 3</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://irishhostfamily.ie/wp-content/uploads/2017/05/group-of-kids-Irish-Host-Family.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                  }}
                />
                <Body>
                  <Text>Activity 4</Text>
                  <Text note>Note 4</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://irishhostfamily.ie/wp-content/uploads/2017/05/group-of-kids-Irish-Host-Family.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                  }}
                />
                <Body>
                  <Text>Activity 5</Text>
                  <Text note>Note 5</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://irishhostfamily.ie/wp-content/uploads/2017/05/group-of-kids-Irish-Host-Family.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://getuikit.com/v2/docs/images/placeholder_600x400.svg"
                  }}
                />
                <Body>
                  <Text>Activity 6</Text>
                  <Text note>Note </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://irishhostfamily.ie/wp-content/uploads/2017/05/group-of-kids-Irish-Host-Family.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem header bordered>
              <Text>Organization description</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/1724448/original/big_Logo_Design_307_n9e06f0Se/design-your-company-logo-in-english-and-arabic.jpg"
                  }}
                  style={{ height: 200, width: 400, flex: 1 }}
                />
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

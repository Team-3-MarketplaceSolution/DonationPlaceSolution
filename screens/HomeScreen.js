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
                  Please create a donation list to donate.
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
                  <Text>American Red Cross</Text>
                  <Text note>Sound the Alarm. Save a Life. Just one day of your life can change someone else's forever.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "http://clipart-library.com/images/8ixrGeqrT.jpg"
                }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>42 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>14 Comments</Text>
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
                      ".\assets\images\goodwill.jpg"
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
                      "https://avatars3.githubusercontent.com/u/56052335?s=400&u=34e0360e48b76117e01419d7682c0f3185436d39&v=4"
                  }}
                  style={{ height: 350, width: 350, flex: 1 }}
                />
                <Text>DonationPlace Solution</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="thumbs-up"/>
                  <Text>1,926 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

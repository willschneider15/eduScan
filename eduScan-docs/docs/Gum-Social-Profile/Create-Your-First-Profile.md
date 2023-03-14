---
sidebar_position: 2
---

# Social Profile Settings

Let's look at how eduScan integrates Gum

## Stages to Account Creation

1. User Account
2. Profile Account + Profile Metadata Account
3. Post Account

## Users

In Gum, users are no more than a [PDA](https://solanacookbook.com/core-concepts/pdas.html#facts) which is required in order to create profiles.

Read more about what users are in the Gum [docs](https://docs.gum.fun/concepts/user).

## Profile Account & Metadata Account

After creating a user, you need to create a profile account.

Here are the following fields that is required in order to create a profile account.

![img alt](/img/createProfile.png "Create Profile")

MetadataUri is a unique url you need to provide that contains the fields that is necessary to be considered as a profile.

The following fields are:

1. name
2. bio
3. username
4. avatar

We can see that in the `validateProfileMetadata` function provided by Gum SDK, it checks the required fields during the creation of profile metadata

![img alt](/img/validateMetadata.png "Validatate Metadata")

We organize the fields in a JSON format and we upload it to a off-chain storage solution like Arweave or Shadow Drive. After uploading, you will receive a unique url that points to your profile JSON and that will be your MetadataUri.

![img alt](/img/profileJSON.png "Profile JSON")

:arrow_down:

**https://arweave.net/zU7rjLdhyysgs9q-Twmw8PsF9pncIhZNfrQK40K0X6s**

Lastly, select your desired profile type and initate create profile transaction.

Once you are done, you can view your profile on [eduscan.xyz/socials](https://www.eduscan.xyz/social)

![img alt](/img/profileView.png "Profile View")

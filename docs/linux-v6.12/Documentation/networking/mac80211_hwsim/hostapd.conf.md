---
sidebar_position: 1
---
# hostapd.conf

### ファイル情報

- パス: `linux-v6.12/Documentation/networking/mac80211_hwsim/hostapd.conf`

### コンテンツ

```conf
interface=wlan0
driver=nl80211

hw_mode=g
channel=1
ssid=mac80211 test

wpa=2
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
wpa_passphrase=12345678

```

---
sidebar_position: 3
---
# wpa_supplicant.conf

### ファイル情報

- パス: `linux-v6.12/Documentation/networking/mac80211_hwsim/wpa_supplicant.conf`

### コンテンツ

```conf
ctrl_interface=/var/run/wpa_supplicant

network={
	ssid="mac80211 test"
	psk="12345678"
	key_mgmt=WPA-PSK
	proto=WPA2
	pairwise=CCMP
	group=CCMP
}

```

---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/net/ieee802154/6lowpan/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config IEEE802154_6LOWPAN
	tristate "6lowpan support over IEEE 802.15.4"
	depends on 6LOWPAN
	help
	  IPv6 compression over IEEE 802.15.4.

```

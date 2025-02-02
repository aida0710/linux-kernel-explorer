---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `net/mac802154/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MAC802154
	tristate "Generic IEEE 802.15.4 Soft Networking Stack (mac802154)"
	depends on IEEE802154
	select CRC_CCITT
	select CRYPTO
	select CRYPTO_AUTHENC
	select CRYPTO_CCM
	select CRYPTO_CTR
	select CRYPTO_AES
	help
	  This option enables the hardware independent IEEE 802.15.4
	  networking stack for SoftMAC devices (the ones implementing
	  only PHY level of IEEE 802.15.4 standard).

	  Note: this implementation is neither certified, nor feature
	  complete! Compatibility with other implementations hasn't
	  been tested yet!

	  If you plan to use HardMAC IEEE 802.15.4 devices, you can
	  say N here. Alternatively you can say M to compile it as
	  module.

```

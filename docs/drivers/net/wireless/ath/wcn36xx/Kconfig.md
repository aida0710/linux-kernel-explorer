---
sidebar_position: 8
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/ath/wcn36xx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
config WCN36XX
	tristate "Qualcomm Atheros WCN3660/3680 support"
	depends on MAC80211 && HAS_DMA
	depends on QCOM_WCNSS_CTRL || QCOM_WCNSS_CTRL=n
	depends on RPMSG || RPMSG=n
	help
	  This module adds support for wireless adapters based on
	  Qualcomm Atheros WCN3660 and WCN3680 mobile chipsets.

	  If you choose to build a module, it'll be called wcn36xx.

config WCN36XX_DEBUGFS
	bool "WCN36XX debugfs support"
	depends on WCN36XX
	help
	  Enabled debugfs support

	  If unsure, say Y to make it easier to debug problems.

```

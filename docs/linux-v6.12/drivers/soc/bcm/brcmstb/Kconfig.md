---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/soc/bcm/brcmstb/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
if SOC_BRCMSTB

config BRCMSTB_PM
	bool "Support suspend/resume for STB platforms"
	default y
	depends on PM && BMIPS_GENERIC

endif # SOC_BRCMSTB

```

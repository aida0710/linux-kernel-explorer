---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/hyperv/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config HYPERV_NET
	tristate "Microsoft Hyper-V virtual network driver"
	depends on HYPERV
	select UCS2_STRING
	select NLS
	help
	  Select this option to enable the Hyper-V virtual network driver.

```

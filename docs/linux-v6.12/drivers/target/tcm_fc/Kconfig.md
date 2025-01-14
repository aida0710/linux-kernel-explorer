---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/target/tcm_fc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config TCM_FC
	tristate "TCM_FC fabric Plugin"
	depends on LIBFC
	help
	Say Y here to enable the TCM FC plugin for accessing FC fabrics in TCM

```

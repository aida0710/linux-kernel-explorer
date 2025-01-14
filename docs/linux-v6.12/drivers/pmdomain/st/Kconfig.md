---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pmdomain/st/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config UX500_PM_DOMAIN
	bool "ST-Ericsson ux500 Power Domain"
	depends on ARCH_U8500 || COMPILE_TEST
	default ARCH_U8500

```

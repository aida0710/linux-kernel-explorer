---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/ntb/hw/epf/Kconfig`

### コンテンツ

```txt
config NTB_EPF
	tristate "Generic EPF Non-Transparent Bridge support"
	depends on m
	help
	  This driver supports EPF NTB on configurable endpoint.
	  If unsure, say N.

```

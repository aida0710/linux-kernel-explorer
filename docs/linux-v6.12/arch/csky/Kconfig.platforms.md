---
sidebar_position: 4
---
# Kconfig.platforms

### ファイル情報

- パス: `linux-v6.12/arch/csky/Kconfig.platforms`

### コンテンツ

```platforms
menu "Platform drivers selection"

config ARCH_CSKY_DW_APB_ICTL
	bool "Select dw-apb interrupt controller"
	select DW_APB_ICTL
	default y
	help
	  This enables support for snps dw-apb-ictl
endmenu

```

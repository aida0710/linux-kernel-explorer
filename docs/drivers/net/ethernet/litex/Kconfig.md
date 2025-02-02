---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/litex/Kconfig`

### コンテンツ

```txt
#
# LiteX device configuration
#

config NET_VENDOR_LITEX
	bool "LiteX devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about LiteX devices. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_LITEX

config LITEX_LITEETH
	tristate "LiteX Ethernet support"
	depends on OF && HAS_IOMEM
	help
	  If you wish to compile a kernel for hardware with a LiteX LiteEth
	  device then you should answer Y to this.

	  LiteX is a soft system-on-chip that targets FPGAs. LiteETH is a basic
	  network device that is commonly used in LiteX designs.

endif # NET_VENDOR_LITEX

```

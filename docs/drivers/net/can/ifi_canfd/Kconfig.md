---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/can/ifi_canfd/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CAN_IFI_CANFD
	depends on HAS_IOMEM
	tristate "IFI CAN_FD IP"
	help
	  This driver adds support for the I/F/I CAN_FD soft IP block
	  connected to the "platform bus" (Linux abstraction for directly
	  to the processor attached devices). The CAN_FD is most often
	  synthesised into an FPGA or CPLD.

```

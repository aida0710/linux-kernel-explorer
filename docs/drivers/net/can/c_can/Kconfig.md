---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `drivers/net/can/c_can/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig CAN_C_CAN
	tristate "Bosch C_CAN/D_CAN devices"
	depends on HAS_IOMEM

if CAN_C_CAN

config CAN_C_CAN_PLATFORM
	tristate "Generic Platform Bus based C_CAN/D_CAN driver"
	help
	  This driver adds support for the C_CAN/D_CAN chips connected
	  to the "platform bus" (Linux abstraction for directly to the
	  processor attached devices) which can be found on various
	  boards from ST Microelectronics (http://www.st.com) like the
	  SPEAr1310 and SPEAr320 evaluation boards & TI (www.ti.com)
	  boards like am335x, dm814x, dm813x and dm811x.

config CAN_C_CAN_PCI
	tristate "Generic PCI Bus based C_CAN/D_CAN driver"
	depends on PCI
	help
	  This driver adds support for the C_CAN/D_CAN chips connected
	  to the PCI bus. E.g. for the C_CAN controller IP inside the
	  Intel Atom E6xx series IOH (aka EG20T 'PCH CAN').
endif

```

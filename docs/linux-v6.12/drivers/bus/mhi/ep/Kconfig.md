---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/bus/mhi/ep/Kconfig`

### コンテンツ

```txt
config MHI_BUS_EP
	tristate "Modem Host Interface (MHI) bus Endpoint implementation"
	help
	  Bus driver for MHI protocol. Modem Host Interface (MHI) is a
	  communication protocol used by a host processor to control
	  and communicate a modem device over a high speed peripheral
	  bus or shared memory.

	  MHI_BUS_EP implements the MHI protocol for the endpoint devices,
	  such as SDX55 modem connected to the host machine over PCIe.

```

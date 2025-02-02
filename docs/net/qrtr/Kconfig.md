---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `net/qrtr/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Qualcomm IPC Router configuration
#

config QRTR
	tristate "Qualcomm IPC Router support"
	help
	  Say Y if you intend to use Qualcomm IPC router protocol.  The
	  protocol is used to communicate with services provided by other
	  hardware blocks in the system.

	  In order to do service lookups, a userspace daemon is required to
	  maintain a service listing.

if QRTR

config QRTR_SMD
	tristate "SMD IPC Router channels"
	depends on RPMSG || (COMPILE_TEST && RPMSG=n)
	help
	  Say Y here to support SMD based ipcrouter channels.  SMD is the
	  most common transport for IPC Router.

config QRTR_TUN
	tristate "TUN device for Qualcomm IPC Router"
	help
	  Say Y here to expose a character device that allows user space to
	  implement endpoints of QRTR, for purpose of tunneling data to other
	  hosts or testing purposes.

config QRTR_MHI
	tristate "MHI IPC Router channels"
	depends on MHI_BUS
	help
	  Say Y here to support MHI based ipcrouter channels. MHI is the
	  transport used for communicating to external modems.

endif # QRTR

```

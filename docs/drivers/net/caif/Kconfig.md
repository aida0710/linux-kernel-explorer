---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/caif/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# CAIF physical drivers
#

menuconfig CAIF_DRIVERS
	bool "CAIF transport drivers"
	depends on CAIF
	help
	  Enable this to see CAIF physical drivers.

if CAIF_DRIVERS

config CAIF_TTY
	tristate "CAIF TTY transport driver"
	depends on CAIF && TTY
	default n
	help
	  The CAIF TTY transport driver is a Line Discipline (ldisc)
	  identified as N_CAIF. When this ldisc is opened from user space
	  it will redirect the TTY's traffic into the CAIF stack.

config CAIF_VIRTIO
	tristate "CAIF virtio transport driver"
	depends on CAIF && HAS_DMA
	select VHOST_RING
	select VIRTIO
	select GENERIC_ALLOCATOR
	default n
	help
	  The CAIF driver for CAIF over Virtio.

endif # CAIF_DRIVERS

```

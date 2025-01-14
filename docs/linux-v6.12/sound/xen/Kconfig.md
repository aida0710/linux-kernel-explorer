---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/sound/xen/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# ALSA Xen drivers

config SND_XEN_FRONTEND
	tristate "Xen para-virtualized sound frontend driver"
	depends on XEN
	select SND_PCM
	select XEN_XENBUS_FRONTEND
	select XEN_FRONT_PGDIR_SHBUF
	help
	  Choose this option if you want to enable a para-virtualized
	  frontend sound driver for Xen guest OSes.

```

---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/fs/vboxsf/Kconfig`

### コンテンツ

```txt
config VBOXSF_FS
	tristate "VirtualBox guest shared folder (vboxsf) support"
	depends on X86 && VBOXGUEST
	select NLS
	help
	  VirtualBox hosts can share folders with guests, this driver
	  implements the Linux-guest side of this allowing folders exported
	  by the host to be mounted under Linux.

	  If you want to use shared folders in VirtualBox guests, answer Y or M.

```

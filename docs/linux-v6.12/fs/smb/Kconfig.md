---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/fs/smb/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# smbfs configuration

source "fs/smb/client/Kconfig"
source "fs/smb/server/Kconfig"

config SMBFS
	tristate
	default y if CIFS=y || SMB_SERVER=y
	default m if CIFS=m || SMB_SERVER=m

```

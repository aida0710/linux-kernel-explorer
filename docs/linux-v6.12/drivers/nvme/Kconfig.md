---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/nvme/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menu "NVME Support"

source "drivers/nvme/common/Kconfig"
source "drivers/nvme/host/Kconfig"
source "drivers/nvme/target/Kconfig"

endmenu

```

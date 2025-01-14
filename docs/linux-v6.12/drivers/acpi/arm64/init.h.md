---
sidebar_position: 9
---
# init.h

### ファイル情報

- パス: `linux-v6.12/drivers/acpi/arm64/init.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#include <linux/init.h>

void __init acpi_agdi_init(void);
void __init acpi_apmt_init(void);
void __init acpi_iort_init(void);
void __init acpi_amba_init(void);

```

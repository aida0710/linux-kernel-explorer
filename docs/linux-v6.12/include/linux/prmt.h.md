---
sidebar_position: 1017
---
# prmt.h

### ファイル情報

- パス: `linux-v6.12/include/linux/prmt.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

#ifdef CONFIG_ACPI_PRMT
void init_prmt(void);
int acpi_call_prm_handler(guid_t handler_guid, void *param_buffer);
#else
static inline void init_prmt(void) { }
static inline int acpi_call_prm_handler(guid_t handler_guid, void *param_buffer)
{
	return -EOPNOTSUPP;
}
#endif

```

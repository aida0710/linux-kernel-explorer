---
sidebar_position: 22
---
# vexpress.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-versatile/vexpress.h`

### コンテンツ

```h
bool vexpress_smp_init_ops(void);
void vexpress_flags_set(u32 data);

extern const struct smp_operations vexpress_smp_dt_ops;

```

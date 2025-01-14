---
sidebar_position: 28
---
# privcmd.h

### ファイル情報

- パス: `linux-v6.12/drivers/xen/privcmd.h`

### コンテンツ

```h
#include <linux/fs.h>

extern const struct file_operations xen_privcmd_fops;
extern const struct file_operations xen_privcmdbuf_fops;

extern struct miscdevice xen_privcmdbuf_dev;

```

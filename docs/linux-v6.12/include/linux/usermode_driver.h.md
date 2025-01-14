---
sidebar_position: 1384
---
# usermode_driver.h

### ファイル情報

- パス: `linux-v6.12/include/linux/usermode_driver.h`

### コンテンツ

```h
#ifndef __LINUX_USERMODE_DRIVER_H__
#define __LINUX_USERMODE_DRIVER_H__

#include <linux/umh.h>
#include <linux/path.h>

struct umd_info {
	const char *driver_name;
	struct file *pipe_to_umh;
	struct file *pipe_from_umh;
	struct path wd;
	struct pid *tgid;
};
int umd_load_blob(struct umd_info *info, const void *data, size_t len);
int umd_unload_blob(struct umd_info *info);
int fork_usermode_driver(struct umd_info *info);
void umd_cleanup_helper(struct umd_info *info);

#endif /* __LINUX_USERMODE_DRIVER_H__ */

```

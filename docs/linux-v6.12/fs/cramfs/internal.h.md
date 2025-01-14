---
sidebar_position: 2
---
# internal.h

### ファイル情報

- パス: `linux-v6.12/fs/cramfs/internal.h`

### コンテンツ

```h
/* Uncompression interfaces to the underlying zlib */
int cramfs_uncompress_block(void *dst, int dstlen, void *src, int srclen);
int cramfs_uncompress_init(void);
void cramfs_uncompress_exit(void);

```

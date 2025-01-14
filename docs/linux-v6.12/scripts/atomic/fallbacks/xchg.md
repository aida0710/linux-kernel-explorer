---
sidebar_position: 21
---
# xchg

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/xchg`

### コンテンツ

```txt
cat <<EOF
	return raw_xchg${order}(&v->counter, new);
EOF

```

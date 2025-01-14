---
sidebar_position: 5
---
# cmpxchg

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/cmpxchg`

### コンテンツ

```txt
cat <<EOF
	return raw_cmpxchg${order}(&v->counter, old, new);
EOF

```

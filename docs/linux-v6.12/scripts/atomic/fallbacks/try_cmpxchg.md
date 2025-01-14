---
sidebar_position: 20
---
# try_cmpxchg

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/try_cmpxchg`

### コンテンツ

```txt
cat <<EOF
	${int} r, o = *old;
	r = raw_${atomic}_cmpxchg${order}(v, o, new);
	if (unlikely(r != o))
		*old = r;
	return likely(r == o);
EOF

```
